import type React from 'react'

import { CheckedBoxIcon, UncheckedBoxIcon } from './icons'
import { CheckboxGroupWrapper, CheckboxLabel, CheckboxWrapper, Input } from './styled'

export interface CheckboxGroupProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Component content
   */
  children?: React.ReactNode

  /**
   * Determines whether children are rendered horizontally or vertically
   */
  horizontal?: boolean
}

export function CheckboxGroup(props: CheckboxGroupProps): React.ReactElement {
  return <CheckboxGroupWrapper {...props} />
}

export interface CheckboxProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Component content
   */
  children?: React.ReactNode

  /**
   * Determines whether the checkbox is interactable
   */
  disabled?: boolean

  /**
   * Determines whether the checkbox is checked by default
   */
  checked: boolean

  /**
   * Handler when checkbox state is changed
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Checkbox(props: CheckboxProps): React.ReactElement {
  return (
    <CheckboxWrapper className={props.className}>
      <CheckboxLabel disabled={props.disabled} checked={props.checked}>
        <Input
          type="checkbox"
          aria-checked={props.checked}
          onChange={props.disabled ? undefined : props.onChange}
          disabled={props.disabled}
        />
        {props.checked ? <CheckedBoxIcon /> : <UncheckedBoxIcon />}
        {props.children}
      </CheckboxLabel>
    </CheckboxWrapper>
  )
}

export default { Checkbox }
