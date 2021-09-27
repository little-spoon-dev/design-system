import ArrowIcon from '@littlespoon/icons/src/ArrowIcon'
import theme from '@littlespoon/theme'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/ArrowIcon',
  component: ArrowIcon,
} as ComponentMeta<typeof ArrowIcon>

const Template: ComponentStory<typeof ArrowIcon> = (args) => <ArrowIcon {...args} />

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
  fill: theme.colors.primary.primaryBlue.blue60(),
}
