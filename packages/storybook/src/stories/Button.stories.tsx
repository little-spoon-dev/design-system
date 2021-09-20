import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '@littlespoon/button/src/Button'

export default {
  title: 'Design System/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Children = Template.bind({})
Children.args = {
  children: 'Text',
}
