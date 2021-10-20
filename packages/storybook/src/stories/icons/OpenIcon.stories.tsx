import OpenIcon from '@littlespoon/icons/src/OpenIcon'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Icons/OpenIcon',
  component: OpenIcon,
} as ComponentMeta<typeof OpenIcon>

const Template: ComponentStory<typeof OpenIcon> = (args) => <OpenIcon {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Fill = Template.bind({})
Fill.args = {
  fill: 'skyblue',
}

export const Stroke = Template.bind({})
Stroke.args = {
  stroke: 'tomato',
}
