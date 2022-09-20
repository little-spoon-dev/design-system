import InfoIcon from '@littlespoon/icons/src/InfoIcon'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Icons/InfoIcon',
  component: InfoIcon,
} as ComponentMeta<typeof InfoIcon>

const Template: ComponentStory<typeof InfoIcon> = (args) => <InfoIcon {...args} />

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
