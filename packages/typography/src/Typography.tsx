import type React from 'react'

import { TypographyBase } from './TypographyBase'

type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

export interface TypographyProps {
  /**
   * The root node component. Use a string for an HTML element. Defaults to "p".
   */
  as?: ElementType

  /**
   * The content of the component.
   */
  children?: React.ReactNode

  /**
   * Whether to remove bottom margin. Defaults to false.
   */
  noMargin?: boolean

  /**
   * The variant to use. Defaults to "p", which is "p3".
   */
  variant?: ElementType | 'p1' | 'p2' | 'p3' | 'p4'
}

export default function Typography(props: TypographyProps): React.ReactElement<TypographyProps> {
  return <TypographyBase {...props} variant={props.variant || props.as} />
}
