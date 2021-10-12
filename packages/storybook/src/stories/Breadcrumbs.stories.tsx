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
  <Breadcrumbs size={args.size}>{args.children}</Breadcrumbs>
)

export const WithoutBreadcrumbs = Template.bind({})
WithoutBreadcrumbs.args = {
  children: <></>,
}

export const OneBreadcrumb = Template.bind({})
OneBreadcrumb.args = {
  children: <Breadcrumb active>Active</Breadcrumb>,
}

export const TwoBreadcrumbs = Template.bind({})
TwoBreadcrumbs.args = {
  children: (
    <>
      <Breadcrumb>
        <a href={window.location.href}>Breadcrumb</a>
      </Breadcrumb>
      <Breadcrumb active>Active</Breadcrumb>
    </>
  ),
}
