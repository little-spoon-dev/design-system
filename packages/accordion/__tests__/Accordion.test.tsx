import '@testing-library/jest-dom'

import { Accordion, AccordionItem } from '@littlespoon/accordion/src/Accordion'
import { AccordionDetails } from '@littlespoon/accordion/src/AccordionDetails'
import { AccordionSummary } from '@littlespoon/accordion/src/AccordionSummary'
import { render, screen } from '@testing-library/react'

describe('single default accordion', () => {
  it('renders single accordion', async () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionSummary isExpanded={true}>Heading</AccordionSummary>
          <AccordionDetails isExpanded={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </AccordionDetails>
        </AccordionItem>
      </Accordion>,
    )
    expect(document.getElementsByTagName('button')).toHaveLength(1)
  })
})

describe('single expanded accordion', () => {
  it('renders single accordion', async () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionSummary>Heading</AccordionSummary>
          <AccordionDetails>Content</AccordionDetails>
        </AccordionItem>
      </Accordion>,
    )
    expect(document.getElementsByTagName('button')).toHaveLength(1)
    expect(screen.getByText('Add icon')).toBeInTheDocument()
  })
})

describe('multiple accordion', () => {
  class ResizeObserver {
    observe() {
      // do nothing
    }
    unobserve() {
      // do nothing
    }
    disconnect() {
      // do nothing
    }
  }

  window.ResizeObserver = ResizeObserver
  it('renders multiple accordion', async () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionSummary isExpanded={false}>Heading1</AccordionSummary>
          <AccordionDetails isExpanded={false}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionSummary isExpanded={true}>Heading2</AccordionSummary>
          <AccordionDetails isExpanded={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionSummary isExpanded={false}>Heading3</AccordionSummary>
          <AccordionDetails isExpanded={false}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </AccordionDetails>
        </AccordionItem>
      </Accordion>,
    )
    expect(document.getElementsByTagName('button')).toHaveLength(3)
    expect(screen.getByText('Subtract icon')).toBeInTheDocument()
  })
})
