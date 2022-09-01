import BoxIcon from '@littlespoon/icons/src/BoxIcon'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Icons/BoxIcon',
  component: BoxIcon,
} as ComponentMeta<typeof BoxIcon>

const Template: ComponentStory<typeof BoxIcon> = (args) => <BoxIcon {...args} />

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

export const Notification = Template.bind({})
Notification.args = {
  notificationColor: 'tomato',
}
