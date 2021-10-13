import { Breadcrumb, Breadcrumbs } from '@littlespoon/breadcrumbs/src/Breadcrumbs'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>

const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />

const url = 'https://example.com/'

export const Default = Template.bind({})
Default.args = {
  children: [
    <Breadcrumb>
      <a href={url}>Little</a>
    </Breadcrumb>,
    <Breadcrumb>
      <a href={url}>Spoon</a>
    </Breadcrumb>,
    <Breadcrumb active>Breadcrumbs</Breadcrumb>,
  ],
}

export const Empty = Template.bind({})
Empty.args = {}

export const Active = Template.bind({})
Active.args = {
  children: <Breadcrumb active>Active Breadcrumb</Breadcrumb>,
}

export const Two = Template.bind({})
Two.args = {
  children: [
    <Breadcrumb>
      <a href={url}>One</a>
    </Breadcrumb>,
    <Breadcrumb active>Two</Breadcrumb>,
  ],
}

export const Three = Template.bind({})
Three.args = {
  children: [
    <Breadcrumb>
      <a href={url}>One</a>
    </Breadcrumb>,
    <Breadcrumb>
      <a href={url}>Two</a>
    </Breadcrumb>,
    <Breadcrumb active>Three</Breadcrumb>,
  ],
}

export const Small = Template.bind({})
Small.args = {
  children: [<Breadcrumb>Small</Breadcrumb>, <Breadcrumb active>Small Active</Breadcrumb>],
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  children: [<Breadcrumb>Medium</Breadcrumb>, <Breadcrumb active>Medium Active</Breadcrumb>],
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  children: [<Breadcrumb>Large</Breadcrumb>, <Breadcrumb active>Large Active</Breadcrumb>],
  size: 'large',
}
