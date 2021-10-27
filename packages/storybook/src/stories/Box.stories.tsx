import Box from '@littlespoon/box/src/Box'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Box',
  component: Box,
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'No style',
}

export const Margin = Template.bind({})
Margin.args = {
  children: 'With margin',
  sx: {
    margin: '1rem',
  },
}
