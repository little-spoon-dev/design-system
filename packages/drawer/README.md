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
<Drawer open>
  <h2>Lorem Ipsum</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Drawer>
```

Render drawer with a close button:

```tsx
<Drawer open showCloseButton>
  <h2>Lorem Ipsum</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Drawer>
```

Render a styled drawer:

```tsx
import styled from 'styled-components'

const StyledDrawer = styled(Drawer)`
  background-color: #95efc3;
  &.styled-drawer {
    color: #f10a86;
  }
`

;<StyledDrawer className="styled-drawer" open>
  <h2>Lorem Ipsum</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</StyledDrawer>
```
