# @littlespoon/theme

## Install

Yarn:

```sh
yarn add @littlespoon/theme
```

npm:

```sh
npm install --save @littlespoon/theme
```

## Usage

Import theme:

```ts
import theme from '@littlespoon/theme'

console.log(theme.colors.primary.primaryBlue.blue60()) // 'rgba(44,213,196,1)'
```

Import colors:

```ts
import colors from '@littlespoon/theme/lib/colors'

console.log(colors.primary.primaryBlue.blue60()) // 'rgba(44,213,196,1)'
```

Import color:

```ts
import { blue60 } from '@littlespoon/theme/lib/colors/primary'

console.log(blue60()) // 'rgba(44,213,196,1)'
```
