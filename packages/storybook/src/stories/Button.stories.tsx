import Button from '@littlespoon/button/src/Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

export default {
  title: 'Design System/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Children = Template.bind({})
Children.args = {
  children: 'Text',
  disabled: false,
}
