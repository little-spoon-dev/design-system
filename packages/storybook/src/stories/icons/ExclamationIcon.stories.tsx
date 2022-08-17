import ExclamationIcon from '@littlespoon/icons/src/ExclamationIcon'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Icons/ExclamationIcon',
  component: ExclamationIcon,
} as ComponentMeta<typeof ExclamationIcon>

const Template: ComponentStory<typeof ExclamationIcon> = (args) => <ExclamationIcon {...args} />

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
