import Tag from '@littlespoon/tag/src/Tag'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

export const Default: ComponentStory<typeof Tag> = (args) => (
  <Tag size={args.size} children={args.children} onClick={args.onClick} />
)

Default.args = {
  size: 'medium',
  children: 'Default',
}

export const Deletable: ComponentStory<typeof Tag> = (args) => (
  <Tag onDelete={args.onDelete} children={args.children} size={args.size} />
)

Deletable.args = {
  size: 'medium',
  children: 'Deletable',
}
