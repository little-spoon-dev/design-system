import { Checkbox, CheckboxGroup } from '@littlespoon/checkbox/src/Checkbox'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const CheckboxTemplate: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Default = CheckboxTemplate.bind({})
Default.args = {
  children: 'Text',
}

export const Disabled = CheckboxTemplate.bind({})
Disabled.args = {
  children: 'Text',
  disabled: true,
}

const checkboxProps = {
  children: 'Text',
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
