# @littlespoon/link

[![NPM version](https://img.shields.io/npm/v/@littlespoon/link.svg)](https://www.npmjs.com/package/@littlespoon/link)

## Install

[Yarn](https://yarnpkg.com/package/@littlespoon/link):

```sh
yarn add @littlespoon/link
```

[npm](https://www.npmjs.com/package/@littlespoon/link):

```sh
npm install @littlespoon/link --save
```

[UNPKG](https://unpkg.com/browse/@littlespoon/link/)

## Usage

Import component:

```tsx
import Link from '@littlespoon/link'
```

Render link:

```tsx
<Link href="#">Text</Link>
```

Render link with underline on hover:

```tsx
<Link href="#" underline="hover">
  Text
</Link>
```

Render link with no underline:

```tsx
<Link href="#" underline="none">
  Text
</Link>
```

Render external link:

```tsx
<Link href="https://www.littlespoon.com/" target="_blank">
  Text
</Link>
```
