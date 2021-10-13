import Divider from '@littlespoon/divider/src/Divider'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Inverted = Template.bind({})
Inverted.args = {
  inverted: true,
}
