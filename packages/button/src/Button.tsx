import type React from 'react'

import { ButtonBase } from './ButtonBase'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode

  /**
   * The size of the component. Defaults to "medium".
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge'

  /**
   * The variant to use. Defaults to "primary".
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'overlay' | 'critical'

  /**
   * Whether the button is interactive or not. Defaults to false.
   */
  disabled?: boolean
}

export default function Button({
  size = 'medium',
  variant = 'primary',
  ...props
}: ButtonProps): React.ReactElement<ButtonProps> {
  return <ButtonBase type="button" {...props} size={size} variant={variant} />
}
