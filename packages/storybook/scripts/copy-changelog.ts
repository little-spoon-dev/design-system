#!/usr/bin/env node

/* eslint-disable no-console */

// Copy `packages/*/CHANGELOG.md` to `packages/storybook/src/stories/changelog/*.stories.mdx`.

import { readFileSync, readdirSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const changelogStoriesDirectory = resolve(__dirname, '../src/stories/changelog')
const rootDirectory = resolve(__dirname, '../../..')
const packagesDirectory = resolve(rootDirectory, 'packages')
const packageDirectoryNames = readdirSync(packagesDirectory)

packageDirectoryNames.forEach((packageDirectoryName) => {
  const packageDirectory = resolve(packagesDirectory, packageDirectoryName)
  const changelogFile = resolve(packageDirectory, 'CHANGELOG.md')

  try {
    let changelog = readFileSync(changelogFile, { encoding: 'utf8' })
    changelog = changelog.replace(
      '# Changelog',
      `import { Meta } from '@storybook/addon-docs'

<Meta title="Changelog/${packageDirectoryName}" />`,
    )
    const changelogStoriesFile = resolve(
      changelogStoriesDirectory,
      `${packageDirectoryName}.stories.mdx`,
    )
    writeFileSync(changelogStoriesFile, changelog)
  } catch (error) {
    console.error(error)
  }
})

console.log(
  'Copied `packages/*/CHANGELOG.md` to `packages/storybook/src/stories/changelog/*.stories.mdx`',
)
