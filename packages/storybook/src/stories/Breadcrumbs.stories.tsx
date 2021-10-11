import { Breadcrumbs } from '@littlespoon/breadcrumbs/src/Breadcrumbs'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>

const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />

export const Default = Template.bind({})
Default.args = {
  routes: [
    { href: window.location.href, name: 'Breadcrumb' },
    { href: window.location.href, name: 'Breadcrumb' },
    { name: 'Active' },
  ],
}
