import Label from '@littlespoon/label/src/Label'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Label',
  component: Label,
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'default',
}

export const Success = Template.bind({})
Success.args = {
  children: 'Success',
  color: 'success20',
  size: 'medium',
}

export const Warning = Template.bind({})
Warning.args = {
  children: 'Warning',
  color: 'warning20',
  size: 'medium',
}

export const Critical = Template.bind({})
Critical.args = {
  children: 'Critical',
  color: 'critical20',
  size: 'medium',
}

export const Informative = Template.bind({})
Informative.args = {
  children: 'Informative',
  color: 'informative20',
  size: 'medium',
}

export const Small = Template.bind({})
Small.args = {
  children: 'small',
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  children: 'medium',
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  children: 'large',
  size: 'large',
}
