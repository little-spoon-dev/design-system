import Box from '@littlespoon/box/src/Box'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Box',
  component: Box,
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Box with no style',
}

export const Margin = Template.bind({})
Margin.args = {
  children: 'Box with margin',
  sx: {
    margin: '1rem',
  },
}

export const Responsive = Template.bind({})
Responsive.args = {
  children: "Box that's responsive",
  sx: {
    mobile: {
      fontSize: '1rem',
    },
    tablet: {
      fontSize: '2rem',
    },
    desktop: {
      fontSize: '3rem',
    },
    xxl: {
      fontSize: '4rem',
    },
    fontSize: '5rem',
  },
}

export const As = Template.bind({})
As.args = {
  children: 'Box as h1',
  as: 'h1',
}
