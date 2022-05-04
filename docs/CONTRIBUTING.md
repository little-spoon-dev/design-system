# Contributing

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Available Scripts](#available-scripts)
  - [`yarn build`](#yarn-build)
  - [`yarn clean`](#yarn-clean)
  - [`yarn create-package`](#yarn-create-package)
  - [`yarn lint`](#yarn-lint)
  - [`yarn lint:fix`](#yarn-lintfix)
  - [`yarn lint:tsc`](#yarn-linttsc)
  - [`yarn storybook`](#yarn-storybook)
  - [`yarn test`](#yarn-test)
- [Development](#development)
- [Release](#release)
  - [Canary](#canary)
  - [Dry Run](#dry-run)

## Prerequisites

[Node.js](https://nodejs.org/):

```sh
brew install node
```

[Yarn 1](https://classic.yarnpkg.com/):

```sh
brew install yarn
```

## Install

Clone the repository:

```sh
git clone git@github.com:little-spoon-dev/design-system.git
cd design-system
```

Install dependencies and bootstrap packages:

```sh
yarn
```

## Available Scripts

In the root directory, you can run:

### `yarn build`

Build all packages:

```sh
yarn build
```

Build a single package:

```sh
yarn build --scope=<packageName>
```

For example:

```sh
yarn build --scope=@littlespoon/button
```

### `yarn clean`

Delete build artifacts from all packages:

```sh
yarn clean
```

Clean a single package:

```sh
yarn clean --scope=<packageName>
```

For example:

```sh
yarn clean --scope=@littlespoon/button
```

### `yarn create-package`

Create a package using the prompt:

```sh
yarn create-package
```

Or create a package using the CLI:

```sh
yarn create-package --help
```

### `yarn lint`

Lint all packages:

```sh
yarn lint
```

Lint a single package:

```sh
yarn lint --scope=<packageName>
```

For example:

```sh
yarn lint --scope=@littlespoon/button
```

### `yarn lint:fix`

Automatically fix lint errors for all packages:

```sh
yarn lint:fix
```

Automatically fix lint errors for a single package:

```sh
yarn lint:fix --scope=<packageName>
```

For example:

```sh
yarn lint:fix --scope=@littlespoon/button
```

### `yarn lint:tsc`

Type check all packages:

```sh
yarn lint:tsc
```

Type check single package:

```sh
yarn lint:tsc --scope=<packageName>
```

For example:

```sh
yarn lint:tsc --scope=@littlespoon/button
```

### `yarn storybook`

Run Storybook:

```sh
yarn storybook
```

But make sure to build before running Storybook:

```sh
yarn build
```

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### `yarn test`

Run tests for all packages:

```sh
yarn test
```

Run tests for a single package:

```sh
yarn test --scope=<packageName>
```

For example:

```sh
yarn test --scope=@littlespoon/button
```

## Development

Test your package in another app by installing the local package:

```sh
yarn add file:<path>/design-system/packages/<package>
```

The following command installs button when design-system is found in the `$HOME` directory:

```sh
yarn add file:~/design-system/packages/button
```

## Release

Release is automated with [Lerna](https://lerna.js.org/).

If npm publish failed:

1. Delete the Git tags on remote
2. Rerun the [publish](https://github.com/little-spoon-dev/design-system/actions/workflows/publish.yml) workflow

Because Lerna commits and pushes the release to the remote repository, branch protection rules have been disabled.

To prevent race conditions with Lerna release, don't merge PRs until after the publish workflow is done.

### Canary

Release a canary version for testing by running the [publish](https://github.com/little-spoon-dev/design-system/actions/workflows/publish.yml) workflow with a branch other than `main`.

### Dry Run

See the to-be-updated versions by running the [publish](https://github.com/little-spoon-dev/design-system/actions/workflows/publish.yml) workflow and enable **Dry run**.
