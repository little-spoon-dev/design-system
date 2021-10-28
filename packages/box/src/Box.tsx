import type React from 'react'
import type { StyledComponentProps, StyledProps } from 'styled-components'

import { BoxBase } from './BoxBase'

export interface BoxProps
  extends StyledComponentProps<'div', object, object, string | number | symbol> {
  /**
   * Box content.
   */
  children?: React.ReactNode

  /**
   * Box style.
   */
  sx?: StyledProps<any> // eslint-disable-line @typescript-eslint/no-explicit-any
}

/**
 * Box
 */
export default function Box(props: BoxProps): React.ReactElement<BoxProps> {
  return <BoxBase {...props} />
}
