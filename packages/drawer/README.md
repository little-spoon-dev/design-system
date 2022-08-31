# @littlespoon/drawer

[![NPM version](https://img.shields.io/npm/v/@littlespoon/drawer.svg)](https://www.npmjs.com/package/@littlespoon/drawer)

## Install

[Yarn](https://yarnpkg.com/package/@littlespoon/drawer):

```sh
yarn add @littlespoon/drawer
```

[npm](https://www.npmjs.com/package/@littlespoon/drawer):

```sh
npm install @littlespoon/drawer --save
```

[UNPKG](https://unpkg.com/browse/@littlespoon/drawer)

## Usage

Import component:

```tsx
import Drawer from '@littlespoon/drawer'
```

Render drawer:

```tsx
<Drawer open={true}>
  <h2>Drawer</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</Drawer>
```

Render drawer with close button:

```tsx
<Drawer open={true} showCloseButton={true}>
  <h2>Drawer</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</Drawer>
```
