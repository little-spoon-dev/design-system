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

const checkboxProps = {
  children: 'Label',
}

const CheckboxGroupTemplate: ComponentStory<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup {...args}>
    <Checkbox {...checkboxProps} /> <Checkbox {...checkboxProps} /> <Checkbox {...checkboxProps} />
    <Checkbox {...checkboxProps} />
  </CheckboxGroup>
)

export const CheckboxGroupVertical = CheckboxGroupTemplate.bind({})
CheckboxGroupVertical.args = {}

export const CheckboxGroupHorizontal = CheckboxGroupTemplate.bind({})
CheckboxGroupHorizontal.args = {
  horizontal: true,
}
