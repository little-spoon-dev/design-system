import Button from '@littlespoon/button/src/Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'default',
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'primary',
  component: 'button',
  disabled: false,
  size: 'medium',
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'secondary',
  component: 'button',
  disabled: false,
  size: 'medium',
  variant: 'secondary',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'disabled',
  component: 'button',
  disabled: true,
  size: 'medium',
  variant: 'primary',
}

export const Small = Template.bind({})
Small.args = {
  children: 'primary',
  component: 'button',
  disabled: false,
  size: 'small',
  variant: 'primary',
}

export const Medium = Template.bind({})
Medium.args = {
  children: 'primary',
  component: 'button',
  disabled: false,
  size: 'medium',
  variant: 'primary',
}

export const Large = Template.bind({})
Large.args = {
  children: 'primary',
  component: 'button',
  disabled: false,
  size: 'large',
  variant: 'primary',
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  children: 'primary',
  component: 'button',
  disabled: false,
  size: 'xlarge',
  variant: 'primary',
}
