import { Color } from '@littlespoon/theme/src/colors'
import type React from 'react'

import { LabelBase } from './LabelBase'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode

  /**
   * The Category of the component. Defaults to "status".
   */
  category?: 'status' | 'product'

  /**
   * The background color of the component. Defaults to "success20".
   */
  color?: Color
  /**
   * The size of the component. Defaults to "medium".
   */
  size?: 'small' | 'medium' | 'large'
}

/**
 * Label
 */
export default function Label({ size = 'medium', color = 'success20', ...other }: LabelProps) {
  return <LabelBase {...other} size={size} color={color} />
}
