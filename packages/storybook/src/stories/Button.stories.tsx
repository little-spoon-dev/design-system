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
  as: 'button',
  children: 'primary',
  disabled: false,
  size: 'medium',
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  as: 'button',
  children: 'secondary',
  disabled: false,
  size: 'medium',
  variant: 'secondary',
}

export const Disabled = Template.bind({})
Disabled.args = {
  as: 'button',
  children: 'disabled',
  disabled: true,
  size: 'medium',
  variant: 'primary',
}

export const Small = Template.bind({})
Small.args = {
  as: 'button',
  children: 'small',
  disabled: false,
  size: 'small',
  variant: 'primary',
}

export const Medium = Template.bind({})
Medium.args = {
  as: 'button',
  children: 'medium',
  disabled: false,
  size: 'medium',
  variant: 'primary',
}

export const Large = Template.bind({})
Large.args = {
  as: 'button',
  children: 'large',
  disabled: false,
  size: 'large',
  variant: 'primary',
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  as: 'button',
  children: 'xlarge',
  disabled: false,
  size: 'xlarge',
  variant: 'primary',
}

export const Link = Template.bind({})
Link.args = {
  as: 'a',
  children: 'link',
  disabled: false,
  href: '#',
  size: 'medium',
  variant: 'primary',
}

export const Click = Template.bind({})
Click.args = {
  children: 'click',
  onClick: () => alert('Clicked!'),
}
