import { Checkbox, CheckboxGroup } from '@littlespoon/checkbox/src/Checkbox'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Label',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Label',
  disabled: true,
}

const CheckboxGroupTemplate: ComponentStory<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup {...args}>
    <Checkbox {...args} /> <Checkbox {...args} /> <Checkbox {...args} />
    <Checkbox {...args} />
  </CheckboxGroup>
)

export const CheckboxGroupVertical = CheckboxGroupTemplate.bind({})
CheckboxGroupVertical.args = {
  children: 'Label',
}

export const CheckboxGroupHorizontal = CheckboxGroupTemplate.bind({})
CheckboxGroupHorizontal.args = {
  horizontal: true,
  children: 'Label',
}
