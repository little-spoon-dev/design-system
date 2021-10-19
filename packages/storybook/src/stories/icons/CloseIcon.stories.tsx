import CloseIcon from '@littlespoon/icons/src/CloseIcon'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Icons/CloseIcon',
  component: CloseIcon,
} as ComponentMeta<typeof CloseIcon>

const Template: ComponentStory<typeof CloseIcon> = (args) => <CloseIcon {...args} />

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
