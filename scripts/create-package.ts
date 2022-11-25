#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires, no-console */

import { execSync } from 'child_process'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import inquirer from 'inquirer'
import { resolve } from 'path'
import { hideBin } from 'yargs/helpers'
import yargs from 'yargs/yargs'

interface Input {
  'add-to-storybook'?: boolean
  'add-to-ui'?: boolean
  'component-name'?: string
  'package-name': string
  'template-name': 'react-template' | 'typescript-template'
  dependencies?: (string | number)[]
}

const packageNames: string[] = JSON.parse(
  String(execSync('npx lerna list --json --loglevel=silent')),
).map(({ name }: { name: string }) => name)

const options = {
  'add-to-storybook': {
    default: true,
    describe: 'Whether to add package to storybook',
    type: 'boolean',
  },
  'add-to-ui': {
    default: true,
    describe: 'Whether to add package to @littlespoon/ui',
    type: 'boolean',
  },
  'component-name': {
    describe: 'Component name (e.g., Button)',
    type: 'string',
  },
  'package-name': {
    describe: 'Package name (e.g., @littlespoon/button)',
    demandOption: true,
    type: 'string',
  },
  'template-name': {
    choices: ['react-template', 'typescript-template'],
    default: 'react-template',
    describe: 'Template name',
    type: 'string',
  },
  dependencies: {
    choices: packageNames,
    describe: 'Package dependencies',
    type: 'array',
  },
} as const

const prompts = [
  {
    name: 'package-name',
    message: 'Enter package name (e.g., @littlespoon/button):',
    validate: validatePackageName,
  },
  {
    name: 'template-name',
    choices: options['template-name'].choices,
    default: options['template-name'].default,
    message: 'Select template:',
    type: 'list',
  },
  {
    name: 'component-name',
    message: 'Enter component name (e.g., Button):',
    when: (answers: Input) => answers['template-name'] === 'react-template',
  },
  {
    name: 'dependencies',
    message: 'Add dependencies:',
    choices: options.dependencies.choices,
    type: 'checkbox',
  },
  {
    name: 'add-to-ui',
    message: 'Add to @littlespoon/ui?',
    default: options['add-to-ui'].default,
    type: 'confirm',
  },
  {
    name: 'add-to-storybook',
    message: 'Add to Storybook?',
    default: options['add-to-storybook'].default,
    type: 'confirm',
  },
]

const path = {
  directory: '',
  packages: resolve(__dirname, `../packages`),
  root: resolve(__dirname, '..'),
  template: '',
  templates: resolve(__dirname, '../templates'),
}

const DEFAULT_COMPONENT_NAME = 'Component'

;(async () => {
  const hideBinArgv = hideBin(process.argv)

  let input: Input

  if (!hideBinArgv.length) {
    input = await inquirer.prompt(prompts)
  } else {
    input = (await yargs(hideBinArgv)
      .usage('Usage: yarn $0')
      .options(options)
      .check((argv) => validatePackageName(argv['package-name']))
      .parse()) as Input
  }

  const addToStorybook = input['add-to-storybook']
  const addToUi = input['add-to-ui']
  const componentName = input['component-name']
  const dependencies = input.dependencies
  const packageName = input['package-name']
  const templateName = input['template-name']

  const directory = getDirectoryFromPackageName(packageName)
  path.directory = resolve(path.packages, directory)
  path.template = resolve(path.templates, templateName)
  console.log(`Creating package '${packageName}'...`)

  /**
   * Install.
   */
  exec('yarn')

  /**
   * Copy from template to package.
   */
  console.log(`Copying '${path.template}' to '${path.directory}'...`)
  exec(`cp -r ${path.template} ${path.directory}`)

  /**
   * Update template.
   */
  console.log(`Replacing string '${templateName}' with '${packageName}' in '${path.directory}'...`)
  exec(
    `LC_CTYPE=C && LANG=C && grep -rl '${templateName}' '${path.directory}' | xargs sed -i '' -e 's|${templateName}|${packageName}|g'`,
  )

  /**
   * Rename component.
   */
  if (componentName && componentName !== DEFAULT_COMPONENT_NAME) {
    console.log(
      `Replacing string '${DEFAULT_COMPONENT_NAME}' with '${componentName}' in '${path.directory}'...`,
    )
    exec(
      `grep -rl '${DEFAULT_COMPONENT_NAME}' '${path.directory}' | xargs sed -i '' -e 's/${DEFAULT_COMPONENT_NAME}/${componentName}/g'`,
    )
    console.log(
      `Renaming file '${DEFAULT_COMPONENT_NAME}' to '${componentName}' in '${path.directory}'...`,
    )
    exec(
      `mv ${resolve(path.directory, `src/${DEFAULT_COMPONENT_NAME}.tsx`)} ${resolve(
        path.directory,
        `src/${componentName}.tsx`,
      )}`,
    )
    exec(
      `mv ${resolve(path.directory, `__tests__/${DEFAULT_COMPONENT_NAME}.test.tsx`)} ${resolve(
        path.directory,
        `__tests__/${componentName}.test.tsx`,
      )}`,
    )
  }

  /**
   * Update `package.json`.
   */
  console.log(`Updating '${packageName}' package.json...`)
  const packageJsonPath = resolve(path.directory, 'package.json')
  const packageJson = require(packageJsonPath)
  packageJson.description = `Little Spoon ${directory}`
  packageJson.repository.directory = packageJson.repository.directory.replace(
    'placeholder',
    directory,
  )
  packageJson.keywords.push(directory)
  delete packageJson.private
  writeFileSync(packageJsonPath, stringify(packageJson))

  /**
   * Add package to dependencies.
   */
  if (dependencies) {
    dependencies.forEach((dependency) =>
      exec(`yarn lerna add ${dependency} --exact --scope=${packageName}`),
    )
  }

  /**
   * Add package to `@littlespoon/ui`.
   */
  if (addToUi) {
    addPackageToUi(packageName, directory, componentName)
  }

  /**
   * Add package to `storybook`.
   */
  if (addToStorybook) {
    createStory(packageName, componentName || directory)
  }

  /**
   * Add status badge to `README.md`.
   */
  addToReadme(packageName, directory, componentName)

  /**
   * Install and bootstrap.
   */
  exec('yarn')
})()

/**
 * Executes command.
 */
function exec(command: string) {
  return execSync(command, { stdio: 'inherit' })
}

/**
 * Converts input to JSON string.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function stringify(data: Record<string, any>) {
  return JSON.stringify(data, null, 2) + '\n'
}

/**
 * Gets directory from package name.
 *
 * @param packageName - Package name.
 */
function getDirectoryFromPackageName(packageName: string) {
  let directory = packageName

  if (packageName[0] === '@') {
    const split = packageName.split('/')
    const scope = split[0]
    directory = split[1]
    if (!scope || !/^@[\w-]+$/.test(scope)) {
      throw new Error(`Invalid package scope: ${scope}`)
    }
  }

  if (!directory || !/^[\w-]+$/.test(directory)) {
    throw new Error(`Invalid package name: ${packageName}`)
  }

  if (existsSync(resolve(path.packages, directory))) {
    throw new Error(`Directory already exists: ${directory}`)
  }

  return directory
}

/**
 * Validates package name.
 *
 * @param packageName - Package name.
 */
function validatePackageName(packageName: string) {
  if (packageNames.includes(packageName)) {
    return `Package already exists: ${packageName}`
  }

  try {
    getDirectoryFromPackageName(packageName)
    return true
  } catch (error) {
    return (error as Error).message
  }
}

/**
 * Adds package to `@littlespoon/ui`.
 *
 * @param packageName - Package name.
 * @param directory - Directory.
 * @param componentName - Component name.
 */
function addPackageToUi(packageName: string, directory: string, componentName?: string) {
  exec(`yarn lerna add ${packageName} --exact --scope=@littlespoon/ui`)

  const componentOrDirectory = componentName || directory
  const uiDirectory = resolve(path.packages, 'ui')
  const uiPackageDirectory = resolve(uiDirectory, componentOrDirectory)
  exec(`mkdir -p ${uiPackageDirectory}`)

  writeFileSync(
    resolve(uiPackageDirectory, 'index.ts'),
    `export { default } from '${packageName}'
export * from '${packageName}'
`,
  )

  const uiIndexPath = resolve(uiDirectory, 'index.ts')
  let uiIndex = readFileSync(uiIndexPath).toString()
  uiIndex = uiIndex.replace(
    'export {',
    `import ${componentOrDirectory} from '${packageName}'\n\nexport { ${componentOrDirectory},`,
  )
  uiIndex = uiIndex.replace('export default {', `export default { ${componentOrDirectory},`)
  writeFileSync(uiIndexPath, uiIndex)

  exec('npx lerna run --ignore=storybook build')
  exec('npx lerna run --scope=@littlespoon/ui lint:fix')
  exec('npx lerna run --scope=@littlespoon/ui test -- --updateSnapshot')
}

/**
 * Adds package to `README.md`.
 *
 * @param packageName - Package name.
 * @param directory - Directory.
 * @param componentName - Component name.
 */
function addToReadme(packageName: string, directory: string, componentName?: string) {
  const readmePath = resolve(path.root, 'README.md')
  const readme = readFileSync(readmePath).toString()
  const readmeLines = readme.split('\n')
  const startIndex = readmeLines.indexOf('| --- | --- | --- |') + 1
  const endIndex = readmeLines.indexOf('<!-- prettier-ignore-end -->')
  const statusBadgeRows = readmeLines.splice(startIndex, endIndex - startIndex)
  statusBadgeRows.push(
    `| [${packageName}](packages/${directory}) | [![NPM version](https://img.shields.io/npm/v/${packageName}.svg)](https://www.npmjs.com/package/${packageName}) | ${
      componentName || directory
    } |`,
  )
  statusBadgeRows.sort()
  readmeLines.splice(startIndex, 0, ...statusBadgeRows)
  writeFileSync(readmePath, readmeLines.join('\n'))
}

/**
 * Creates story in Storybook.
 *
 * @param packageName - Package name.
 * @param componentName - Component name.
 */
function createStory(packageName: string, componentName: string) {
  const storiesPath = resolve(path.packages, `storybook/src/stories/${componentName}.stories.tsx`)
  const story = `import ${componentName} from '${packageName}/src/${componentName || ''}'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/${componentName}',
  component: ${componentName},
} as ComponentMeta<typeof ${componentName}>

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Lorem ipsum',
}
`
  writeFileSync(storiesPath, story)
}
