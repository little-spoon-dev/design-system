import Link from '@littlespoon/link/src/Link'
import Typography from '@littlespoon/typography/src/Typography'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Link',
  component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => (
  <Typography>
    <Link {...args} />
  </Typography>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Default Link',
  href: 'javascript:void(0)',
}

export const Fragment = Template.bind({})
Fragment.args = {
  children: 'Fragment Link',
  href: '#',
}

export const UnderlineAlways = Template.bind({})
UnderlineAlways.args = {
  children: 'Underline Always Link',
  href: '#',
  underline: 'always',
}

export const UnderlineHover = Template.bind({})
UnderlineHover.args = {
  children: 'Underline Hover Link',
  href: '#',
  underline: 'hover',
}

export const UnderlineNone = Template.bind({})
UnderlineNone.args = {
  children: 'Underline None Link',
  href: '#',
  underline: 'none',
}

export const ExternalLink = Template.bind({})
ExternalLink.args = {
  children: 'External Link',
  href: 'https://www.littlespoon.com/',
  target: '_blank',
}
