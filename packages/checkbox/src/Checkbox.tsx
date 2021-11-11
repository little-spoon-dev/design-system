import type React from 'react'

import { checkedIcon, uncheckedIcon } from './icons'
import { CheckboxGroupWrapper, CheckboxLabel, CheckboxWrapper, Input } from './styled'

export interface CheckboxGroupProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Determines whether children are rendered horizontally or vertically
   */
  horizontal?: boolean
}

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Component content.
   */
  children?: React.ReactNode

  /**
   * If true, the component is checked.
   */
  checked?: boolean

  /**
   * Callback fired when the state is changed.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface CheckboxLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * If true, the component is checked.
   */
  checked?: boolean

  /**
   * If true, the component is disabled.
   */
  disabled?: boolean
}

export function CheckboxGroup(props: CheckboxGroupProps): React.ReactElement {
  return <CheckboxGroupWrapper {...props} />
}

export function Checkbox({
  children,
  checked,
  disabled,
  onChange,
  ...other
}: CheckboxProps): React.ReactElement {
  return (
    <CheckboxWrapper>
      <CheckboxLabel checked={checked} disabled={disabled}>
        <Input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          {...other}
        />
        {checked ? checkedIcon : uncheckedIcon}
        {children}
      </CheckboxLabel>
    </CheckboxWrapper>
  )
}

export default { Checkbox }
