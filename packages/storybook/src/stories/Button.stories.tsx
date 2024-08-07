import Button from '@littlespoon/button/src/Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { STORYBOOK_BREAKPOINT } from '../constants'

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
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'secondary',
  variant: 'secondary',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  children: 'tertiary',
  variant: 'tertiary',
}

export const Ghost = Template.bind({})
Ghost.args = {
  children: 'ghost',
  variant: 'ghost',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'disabled',
  disabled: true,
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

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  children: 'xlarge',
  size: 'xlarge',
}

export const Link = Template.bind({})
Link.args = {
  as: 'a',
  children: 'link',
  href: 'https://www.littlespoon.com/',
}

export const Click = Template.bind({})
Click.args = {
  children: 'click',
  onClick: () => {
    console.log('Clicked!') // eslint-disable-line no-console
    alert('Clicked!')
  },
}

export const SizeByBreakpoint = Template.bind({})
SizeByBreakpoint.args = {
  children: 'Size by breakpoint',
  size: {
    0: 'small',
    [STORYBOOK_BREAKPOINT.LARGE_MOBILE]: 'medium',
    [STORYBOOK_BREAKPOINT.TABLET]: 'large',
  },
}
