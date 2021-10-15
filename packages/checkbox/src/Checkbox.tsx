import { shadeBlack, shadeWhite } from '@littlespoon/theme/lib/colors/token'
import type React from 'react'
import { useState } from 'react'

import { CheckboxGroupWrapper, CheckboxItem, CheckboxLabel, CheckboxWrapper } from './styled'

const checkedBox = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Checked checkbox</title>
    <path
      d="M16 0H2C0.89543 0 0 0.89543 0 2V16C0 17.1046 0.89543 18 2 18H16C17.1046 18 18 17.1046 18 16V2C18 0.89543 17.1046 0 16 0Z"
      fill={shadeBlack}
    />
    <path
      d="M14.4 5.2876L6.97498 12.7126L3.59998 9.3376"
      stroke={shadeWhite}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const uncheckedBox = (
  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Unchecked checkbox</title>
    <path
      d="M2 0.916748H16C16.6904 0.916748 17.25 1.47639 17.25 2.16675V16.1667C17.25 16.8571 16.6904 17.4167 16 17.4167H2C1.30964 17.4167 0.75 16.8571 0.75 16.1667V2.16675C0.75 1.47639 1.30964 0.916748 2 0.916748Z"
      stroke={shadeBlack}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

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

export function CheckboxGroup({
  children,
  ...props
}: CheckboxGroupProps): React.ReactElement<CheckboxGroupProps> {
  return <CheckboxGroupWrapper {...props}>{children}</CheckboxGroupWrapper>
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
  checked?: boolean

  /**
   * Handler when checkbox state is changed
   */
  changeHandler?: () => void
}

export function Checkbox({ children, ...props }: CheckboxProps): React.ReactElement<CheckboxProps> {
  const [isChecked, setChecked] = useState(
    typeof props.checked === 'boolean' ? props.checked : false,
  )

  const handleChange = () => {
    setChecked(!isChecked)
    if (props.changeHandler) {
      props.changeHandler()
    }
  }

  return (
    <CheckboxWrapper {...props} checked={isChecked}>
      <CheckboxLabel disabled={props.disabled}>
        <CheckboxItem
          {...props}
          type="checkbox"
          aria-checked={isChecked}
          onChange={!props.disabled && (() => handleChange())}
        />
        {isChecked ? checkedBox : uncheckedBox}
        {children}
      </CheckboxLabel>
    </CheckboxWrapper>
  )
}

export default { Checkbox }
