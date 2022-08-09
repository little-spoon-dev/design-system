import Label from '@littlespoon/label'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Label',
  component: Label,
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Lorem ipsum',
}

export const Success20 = Template.bind({})
Success20.args = {
  children: 'success20',
  color: 'success20',
}

export const Brand20 = Template.bind({})
Brand20.args = {
  children: 'brand20',
  color: 'brand20',
}

export const deepGreen20 = Template.bind({})
deepGreen20.args = {
  children: 'deepGreen20',
  color: 'deepGreen20',
}

export const SurfaceStrong = Template.bind({})
SurfaceStrong.args = {
  children: 'surfaceStrong',
  color: 'surfaceStrong',
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
