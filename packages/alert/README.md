# @littlespoon/alert

[![NPM version](https://img.shields.io/npm/v/@littlespoon/alert.svg)](https://www.npmjs.com/package/@littlespoon/alert)

## Install

[Yarn](https://yarnpkg.com/package/@littlespoon/alert):

```sh
yarn add alert
```

[npm](https://www.npmjs.com/package/@littlespoon/alert):

```sh
npm install alert --save
```

[UNPKG](https://unpkg.com/browse/@littlespoon/alert/)

## Usage

```ts
import Alert from '@littlespoon/alert'
```

Render Alert:

```tsx
<Alert />
```

Render alert with props:

```tsx
<Alert title="Alert Title" description="Alert description" onClose={onClose} variant="success" />
```

Render alert with relative position:

```tsx
<Alert
  type="relative"
  title="Alert Title"
  description="Alert description"
  onClose={onClose}
  variant="success"
/>
```
