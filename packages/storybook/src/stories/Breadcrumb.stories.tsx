import { Breadcrumb } from '@littlespoon/breadcrumbs/src/Breadcrumbs'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />

export const Default = Template.bind({})
Default.args = { href: window.location.href, name: 'Breadcrumb' }
