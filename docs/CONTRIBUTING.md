# Contributing

- [Development](#development)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Available Scripts](#available-scripts)
    - [`yarn build`](#yarn-build)
    - [`yarn clean`](#yarn-clean)
    - [`yarn create-package`](#yarn-create-package)
    - [`yarn lint`](#yarn-lint)
    - [`yarn lint:fix`](#yarn-lintfix)
    - [`yarn storybook`](#yarn-storybook)
    - [`yarn sync-modules`](#yarn-sync-modules)
    - [`yarn test`](#yarn-test)
- [Release](#release)
  - [Canary](#canary)
  - [Dry Run](#dry-run)

## Development

### Prerequisites

[Node.js](https://nodejs.org/):

```sh
brew install node
```

[Yarn 1](https://classic.yarnpkg.com/):

```sh
brew install yarn
```

### Install

Clone the repository:

```sh
git clone git@github.com:little-spoon-dev/design-system.git
cd design-system
```

Install dependencies and bootstrap packages:

```sh
yarn
```

### Available Scripts

In the root directory, you can run:

#### `yarn build`

Builds all packages:

```sh
yarn build
```

To build a single package:

```sh
yarn build --scope=<packageName>
```

For example:

```sh
yarn build --scope=@littlespoon/button
```

#### `yarn clean`

Deletes build artifacts from all packages:

```sh
yarn clean
```

To clean a single package:

```sh
yarn clean --scope=<packageName>
```

For example:

```sh
yarn clean --scope=@littlespoon/button
```

#### `yarn create-package`

Creates new package from template:

```sh
yarn create-package
```

Create package `@littlespoon/foo` using TypeScript template (default):

```sh
yarn create-package @littlespoon/foo --template=typescript
```

Create package `@littlespoon/bar` using React template:

```sh
yarn create-package @littlespoon/bar --react
```

#### `yarn lint`

Lints all packages:

```sh
yarn lint
```

To lint a single package:

```sh
yarn lint --scope=<packageName>
```

For example:

```sh
yarn lint --scope=@littlespoon/button
```

#### `yarn lint:fix`

Fixes lint errors for all packages:

```sh
yarn lint:fix
```

To fix lint for a single package:

```sh
yarn lint:fix --scope=<packageName>
```

For example:

```sh
yarn lint:fix --scope=@littlespoon/button
```

#### `yarn storybook`

Runs Storybook:

```sh
yarn storybook
```

#### `yarn test`

Runs tests for all packages:

```sh
yarn test
```

To run tests for a single package:

```sh
yarn test --scope=<packageName>
```

For example:

```sh
yarn test --scope=@littlespoon/button
```

## Release

Release is automated with [Lerna](https://lerna.js.org/).

If npm publish failed, run the [publish](https://github.com/little-spoon-dev/design-system/actions/workflows/publish.yml) workflow manually.

### Canary

To release a canary version for testing, run the [publish](https://github.com/little-spoon-dev/design-system/actions/workflows/publish.yml) workflow with a branch other than `master`.

### Dry Run

To see the to-be-updated versions, run the [publish](https://github.com/little-spoon-dev/design-system/actions/workflows/publish.yml) workflow and change `N` to `y` under **Dry run?**.
