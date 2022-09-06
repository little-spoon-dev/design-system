import {
  Accordion,
  AccordionItem,
  useAccordionController,
} from '@littlespoon/accordion/src/Accordion'
import { AccordionDetails } from '@littlespoon/accordion/src/AccordionDetails'
import { AccordionSummary } from '@littlespoon/accordion/src/AccordionSummary'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <AccordionItem>
      <AccordionSummary>Heading</AccordionSummary>
      <AccordionDetails>Content</AccordionDetails>
    </AccordionItem>
  ),
}

export const SingleExpanded = Template.bind({})
SingleExpanded.args = {
  children: (
    <AccordionItem>
      <AccordionSummary isExpanded={true}>Heading</AccordionSummary>
      <AccordionDetails isExpanded={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </AccordionDetails>
    </AccordionItem>
  ),
}

const multileStoryData = [
  {
    summary: 'Heading1',
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum`,
  },
  {
    summary: 'Heading2',
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum`,
  },
  {
    summary: 'Heading3',
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum`,
  },
]
const MultipleStory = () => {
  const { activeItem, handleItemClick } = useAccordionController()
  return (
    <>
      {multileStoryData.map((data, index) => {
        const isExpanded = activeItem === index

        return (
          <AccordionItem key={data.summary}>
            <AccordionSummary isExpanded={isExpanded} onClick={() => handleItemClick(index)}>
              {data.summary}
            </AccordionSummary>
            <AccordionDetails isExpanded={isExpanded}>{data.details}</AccordionDetails>
          </AccordionItem>
        )
      })}
    </>
  )
}

export const Multiple = Template.bind({})
Multiple.args = {
  children: <MultipleStory />,
}
