import GiftCardIcon from '@littlespoon/icons/src/GiftCardIcon'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Icons/GiftCardIcon',
  component: GiftCardIcon,
} as ComponentMeta<typeof GiftCardIcon>

const Template: ComponentStory<typeof GiftCardIcon> = (args) => <GiftCardIcon {...args} />

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
