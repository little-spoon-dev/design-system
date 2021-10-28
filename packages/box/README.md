# @littlespoon/box

[![NPM version](https://img.shields.io/npm/v/@littlespoon/box.svg)](https://www.npmjs.com/package/@littlespoon/box)

## Install

[Yarn](https://yarnpkg.com/package/@littlespoon/box):

```sh
yarn add @littlespoon/box
```

[npm](https://www.npmjs.com/package/@littlespoon/box):

```sh
npm install @littlespoon/box --save
```

[UNPKG](https://unpkg.com/browse/@littlespoon/box/)

## Usage

Import component:

```tsx
import Box from '@littlespoon/box'
```

Style box with margin:

```tsx
<Box sx={{ margin: '1rem' }}>Text</Box>
```

Style box with responsive breakpoints:

```tsx
<Box sx={{ margin: '1rem', xs: { margin: '2rem' }, desktop: { margin: '3rem' } }}>Text</Box>
```
