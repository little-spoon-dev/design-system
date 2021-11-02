import type React from 'react'

import { ButtonBase } from './ButtonBase'

export interface Props<C extends React.ElementType> {
  /**
   * The root node component. Use a string for an HTML element or a component. Defaults to "button".
   */
  as?: C

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
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost'
}

export type ButtonProps<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>

export default function Button<C extends React.ElementType = 'button'>({
  size = 'medium',
  variant = 'primary',
  ...other
}: ButtonProps<C>): React.ReactElement<ButtonProps<C>> {
  ;(other as ButtonProps<'button'>).as = other.as || 'button'
  if (other.as === 'button' && !other.type) {
    ;(other as ButtonProps<'button'>).type = other.as
  }
  return <ButtonBase {...other} size={size} variant={variant} />
}
