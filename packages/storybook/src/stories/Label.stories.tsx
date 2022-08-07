import { ComponentMeta, ComponentStory } from '@storybook/react'
import Label from 'Label/src/Label'

export default {
  title: 'Design System/Label',
  component: Label,
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Lorem ipsum',
}

export const Critical = Template.bind({})
Critical.args = {
  children: 'critical',
  variant: 'critical',
}

export const Informative = Template.bind({})
Informative.args = {
  children: 'informative',
  variant: 'informative',
}

export const Success = Template.bind({})
Success.args = {
  children: 'success',
  variant: 'success',
}

export const Warning = Template.bind({})
Warning.args = {
  children: 'warning',
  variant: 'warning',
}

export const BLW = Template.bind({})
BLW.args = {
  children: 'BLW',
  variant: 'BLW',
}

export const MostPopular = Template.bind({})
MostPopular.args = {
  children: 'most-popular',
  variant: 'most-popular',
}

export const PickyEaterFave = Template.bind({})
PickyEaterFave.args = {
  children: 'picky-eater-fave',
  variant: 'picky-eater-fave',
}

export const Seasonal = Template.bind({})
Seasonal.args = {
  children: 'seasonal',
  variant: 'seasonal',
}

export const BeggiePacked = Template.bind({})
BeggiePacked.args = {
  children: 'beggie-packed',
  variant: 'beggie-packed',
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
