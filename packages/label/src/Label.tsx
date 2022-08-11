import type { Color } from '@littlespoon/theme/lib/colors'
import type React from 'react'

import { LabelBase } from './LabelBase'

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode

  /**
   * The background color of the component. Defaults to "transparent".
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
export default function Label({ size = 'medium', ...other }: LabelProps) {
  return <LabelBase {...other} size={size} />
}
