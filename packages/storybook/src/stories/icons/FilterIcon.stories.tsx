import FilterIcon from '@littlespoon/icons/src/FilterIcon'
import theme from '@littlespoon/theme/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Icons/FilterIcon',
  component: FilterIcon,
} as ComponentMeta<typeof FilterIcon>

const Template: ComponentStory<typeof FilterIcon> = (args) => <FilterIcon {...args} />

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
  fill: theme.colors.brand60(),
}

export const Stroke = Template.bind({})
Stroke.args = {
  stroke: theme.colors.brand60(),
}
