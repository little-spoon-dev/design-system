# @littlespoon/accordion

[![NPM version](https://img.shields.io/npm/v/@littlespoon/accordion.svg)](https://www.npmjs.com/package/@littlespoon/accordion)

## Install

[Yarn](https://yarnpkg.com/package/@littlespoon/accordion):

```sh
yarn add @littlespoon/accordion
```

[npm](https://www.npmjs.com/package/@littlespoon/accordion):

```sh
npm install @littlespoon/accordion --save
```

[UNPKG](https://unpkg.com/browse/@littlespoon/accordion/)

## Usage

```ts
import {
  Accordion,
  AccordionItem,
  AccordionSummary,
  AccordionDetails,
} from '@littlespoon/accordion'
```

Render Accordion:

```tsx
<Accordion>
  <AccordionItem>
    <AccordionSummary />
    <AccordionDetails />
  </AccordionItem>
</Accordion>
```

Render Accordion with props:

```tsx
<Accordion>
  <AccordionItem>
    <AccordionSummary isExpanded={true} />
    <AccordionDetails isExpanded={true} />
  </AccordionItem>
</Accordion>
```

Render Multiple Accordions with props:

```tsx
<Accordion>
  <AccordionItem>
    <AccordionSummary />
    <AccordionDetails />
  </AccordionItem>
  <AccordionItem>
    <AccordionSummary />
    <AccordionDetails />
  </AccordionItem>
  <AccordionItem>
    <AccordionSummary isExpanded={true} />
    <AccordionDetails isExpanded={true} />
  </AccordionItem>
</Accordion>
```
