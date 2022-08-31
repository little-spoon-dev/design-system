import LogoutIcon from '@littlespoon/icons/src/LogoutIcon'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Icons/LogoutIcon',
  component: LogoutIcon,
} as ComponentMeta<typeof LogoutIcon>

const Template: ComponentStory<typeof LogoutIcon> = (args) => <LogoutIcon {...args} />

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
