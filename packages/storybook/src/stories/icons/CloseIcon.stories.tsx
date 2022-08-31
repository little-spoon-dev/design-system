import CloseIcon from '@littlespoon/icons/src/CloseIcon'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Icons/CloseIcon',
  component: CloseIcon,
} as ComponentMeta<typeof CloseIcon>

const Template: ComponentStory<typeof CloseIcon> = (args) => <CloseIcon {...args} />

export const Default = Template.bind({})
Default.args = {}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: 'xsmall',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}

export const Fill = Template.bind({})
Fill.args = {
  fill: 'skyblue',
}

export const Stroke = Template.bind({})
Stroke.args = {
  stroke: 'tomato',
}
