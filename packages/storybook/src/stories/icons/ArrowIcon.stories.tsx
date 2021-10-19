import ArrowIcon from '@littlespoon/icons/src/ArrowIcon'
import theme from '@littlespoon/theme/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Icons/ArrowIcon',
  component: ArrowIcon,
} as ComponentMeta<typeof ArrowIcon>

const Template: ComponentStory<typeof ArrowIcon> = (args) => <ArrowIcon {...args} />

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

export const Up = Template.bind({})
Up.args = {
  direction: 'up',
}

export const Right = Template.bind({})
Right.args = {
  direction: 'right',
}

export const Down = Template.bind({})
Down.args = {
  direction: 'down',
}

export const Left = Template.bind({})
Left.args = {
  direction: 'left',
}

export const Fill = Template.bind({})
Fill.args = {
  fill: theme.colors.primary.primaryBlue.blue60(),
}

export const Stroke = Template.bind({})
Stroke.args = {
  stroke: theme.colors.primary.primaryBlue.blue60(),
}
