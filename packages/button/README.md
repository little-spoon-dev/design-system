# @littlespoon/button

[![NPM version](https://img.shields.io/npm/v/@littlespoon/button.svg)](https://www.npmjs.com/package/@littlespoon/button)

## Install

[Yarn](https://yarnpkg.com/package/@littlespoon/button):

```sh
yarn add @littlespoon/button
```

[npm](https://www.npmjs.com/package/@littlespoon/button):

```sh
npm install @littlespoon/button --save
```

[UNPKG](https://unpkg.com/browse/@littlespoon/button)

## Usage

Import component:

```tsx
import Button from '@littlespoon/button'
```

Render button:

```tsx
<Button>Text</Button>
```

Render button with props:

```tsx
<Button size="medium" variant="primary">
  This is a button
</Button>
```

Render button as a link:

```tsx
<Button as="a" href="#">
  This is a link
</Button>
```
