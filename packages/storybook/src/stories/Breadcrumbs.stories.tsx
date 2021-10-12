import { Breadcrumb, Breadcrumbs } from '@littlespoon/breadcrumbs/src/Breadcrumbs'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Breadcrumbs',
  component: Breadcrumbs,
  subComponents: { Breadcrumb },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Breadcrumbs>

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args}>
    <Breadcrumb>
      <a href={window.location.href}>Breadcrumb</a>
    </Breadcrumb>
    <Breadcrumb>
      <a href={window.location.href}>Breadcrumb</a>
    </Breadcrumb>
    <Breadcrumb active>Active</Breadcrumb>
  </Breadcrumbs>
)

export const Default = Template.bind({})
