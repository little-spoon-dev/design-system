# Contributing

## Development

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn 1](https://classic.yarnpkg.com/)

### Install

Clone the repository:

```sh
git clone git@github.com:little-spoon-dev/design-system.git && cd design-system
```

Install dependencies:

```sh
yarn
```

### Available Scripts

In the root directory, you can run:

#### `yarn build`

Builds all packages.

#### `yarn clean`

Deletes build artifacts from all packages.

#### `yarn create-package`

Creates new package from template. For example:

```sh
yarn create-package @littlespoon/my-package
```

#### `yarn lint`

Lints all packages.

#### `yarn lint:fix`

Fixes lint errors for all packages.

#### `yarn storybook`

Runs Storybook.

#### `yarn test`

Runs tests for all packages.
