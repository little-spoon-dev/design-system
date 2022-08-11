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

theme.colors.brand60() // 'rgba(44,213,196,1)'
```

Import colors:

```ts
import colors from '@littlespoon/theme/lib/colors'

colors.brand60() // 'rgba(44,213,196,1)'
```

Import color with alpha transparency:

```ts
import { brand60 } from '@littlespoon/theme/lib/colors/primary'

brand60(0.5) // 'rgba(44,213,196,0.5)'
```

Import fonts:

```ts
import { primary, secondary } from '@littlespoon/theme/lib/fonts'

primary.family // 'Lato, sans-serif'
primary.weight.bold // 700
```

Import primary font-family and font-weight:

```ts
import { family, weight } from '@littlespoon/theme/lib/fonts/primary'

family // 'Lato, sans-serif'
weight.bold // 700
```

Import breakpoints:

```ts
import breakpoints, { desktop } from '@littlespoon/theme/lib/breakpoints'

breakpoints.mobile // 0
desktop // 1000
```

Generate media queries:

```ts
import { desktop, down, mobile, up } from '@littlespoon/theme/lib/breakpoints'

up(mobile, 'font-size: 42rem') // '@media (min-width: 0px) { font-size: 42rem; }'
down(desktop, 'display: none') // '@media (max-width: 1000px) { display: none; }'
```
