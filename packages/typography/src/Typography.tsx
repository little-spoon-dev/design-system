import type { StyleProps } from '@littlespoon/theme/lib/style'
import type React from 'react'

import { Bold } from './Bold'
import { TypographyBase } from './TypographyBase'

type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

export interface TypographyProps extends StyleProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode

  /**
   * The root node component. Use a string for an HTML element. Defaults to "p".
   */
  as?: ElementType

  /**
   * The variant to use. Defaults to `as`.
   */
  variant?: ElementType | 'p1' | 'p2' | 'p3' | 'p4' | 'display1' | 'display2' | 'caption1'

  /**
   * Whether the content is bold. Defaults to false.
   */
  bold?: boolean

  /**
   * Whether the content is extra bold. Defaults to false.
   */
  extraBold?: boolean

  /**
   * Whether the content is black. Defaults to false.
   */
  black?: boolean

  /**
   * Whether to remove bottom margin. Defaults to false.
   */
  noMargin?: boolean

  /**
   * Whether to transform the text to uppercase. Defaults to false.
   */
  uppercase?: boolean

  /**
   * Whether to align the text to the center. Defaults to false.
   */
  center?: boolean
}

/**
 * Typography
 */
export default function Typography({
  bold,
  extraBold,
  black,
  children,
  ...other
}: TypographyProps): React.ReactElement<TypographyProps> {
  return (
    <TypographyBase {...other} variant={other.variant || other.as}>
      {bold || extraBold || black ? (
        <Bold bold={bold} extraBold={extraBold} black={black}>
          {children}
        </Bold>
      ) : (
        children
      )}
    </TypographyBase>
  )
}
