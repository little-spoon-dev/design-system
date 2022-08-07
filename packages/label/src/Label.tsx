import type React from 'react'

import { LabelBase } from './LabelBase'

export interface Props<C extends React.ElementType> {
  /**
   * The root node component. Use a string for an HTML element or a component. Defaults to "Label".
   */
  as?: C

  /**
   * The content of the component.
   */
  children?: React.ReactNode

  /**
   * The Category of the component. Defaults to "status".
   */
  category?: 'status' | 'product'

  /**
   * The background color of the component. Defaults to "primary".
   */
  variant?:
    | 'success'
    | 'warning'
    | 'critical'
    | 'informative'
    | 'BLW'
    | 'most-popular'
    | 'picky-eater-fave'
    | 'seasonal'
    | 'beggie-packed'
  /**
   * The size of the component. Defaults to "medium".
   */
  size?: 'small' | 'medium' | 'large'
}

export type LabelProps<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>

export default function Label<C extends React.ElementType = 'label'>({
  size = 'medium',
  variant = 'critical',
  ...other
}: LabelProps<C>): React.ReactElement<LabelProps<C>> {
  ;(other as LabelProps<'label'>).as = other.as || 'label'
  return <LabelBase {...other} size={size} variant={variant} />
}
