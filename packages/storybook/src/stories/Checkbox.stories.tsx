import { Checkbox, CheckboxGroup } from '@littlespoon/checkbox/src/Checkbox'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

export default {
  title: 'Design System/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: false,
    },
  },
} as ComponentMeta<typeof Checkbox>

// Checkbox

const CheckboxTemplate: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = React.useState(false)
  const toggleChecked = () => setChecked(!checked)

  return <Checkbox {...args} onChange={toggleChecked} checked={checked} />
}

export const Default = CheckboxTemplate.bind({})
Default.args = { children: 'Text' }

export const Disabled = CheckboxTemplate.bind({})
Disabled.args = { children: 'Text', disabled: true }

// Checkbox Group

const CheckboxGroupTemplate: ComponentStory<typeof CheckboxGroup> = (args) => {
  const [checkedGroup, setChecked] = React.useState([false, false, false, false])
  const toggleChecked = (indexToToggle: number) => {
    setChecked(
      checkedGroup.map((value, index) => {
        if (index === indexToToggle) {
          return !value
        }
        return value
      }),
    )
  }

  return (
    <CheckboxGroup {...args}>
      {checkedGroup.map((checked, index) => (
        <Checkbox
          key={index}
          checked={checked}
          onChange={() => {
            toggleChecked(index)
          }}
        >
          {args.children || 'Text'} - {index}
        </Checkbox>
      ))}
    </CheckboxGroup>
  )
}

export const CheckboxGroupVertical = CheckboxGroupTemplate.bind({})
CheckboxGroupVertical.args = {}

export const CheckboxGroupHorizontal = CheckboxGroupTemplate.bind({})
CheckboxGroupHorizontal.args = {
  horizontal: true,
}
