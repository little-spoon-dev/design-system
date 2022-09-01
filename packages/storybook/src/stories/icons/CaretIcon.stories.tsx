import CaretIcon from '@littlespoon/icons/src/CaretIcon'
import theme from '@littlespoon/theme/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Icons/CaretIcon',
  component: CaretIcon,
} as ComponentMeta<typeof CaretIcon>

const Template: ComponentStory<typeof CaretIcon> = (args) => <CaretIcon {...args} />

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
  fill: theme.colors.brand60(),
}

export const Stroke = Template.bind({})
Stroke.args = {
  stroke: theme.colors.brand60(),
}
