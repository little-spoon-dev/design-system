# @littlespoon/theme

[![NPM version](https://img.shields.io/npm/v/@littlespoon/theme.svg)](https://www.npmjs.com/package/@littlespoon/theme)

## Install

[Yarn](https://yarnpkg.com/package/@littlespoon/theme):

```sh
yarn add @littlespoon/theme
```

[npm](https://www.npmjs.com/package/@littlespoon/theme):

```sh
npm install @littlespoon/theme --save
```

[UNPKG](https://unpkg.com/browse/@littlespoon/theme/)

## Usage

Import theme:

```ts
import theme from '@littlespoon/theme'

theme.colors.primary.primaryBlue.blue60() // 'rgba(44,213,196,1)'
```

Import colors:

```ts
import colors from '@littlespoon/theme/lib/colors'

colors.primary.primaryBlue.blue60() // 'rgba(44,213,196,1)'
```

Import color with alpha transparency:

```ts
import { blue60 } from '@littlespoon/theme/lib/colors/primary'

blue60(0.5) // 'rgba(44,213,196,0.5)'
```
