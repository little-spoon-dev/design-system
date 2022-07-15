import type { StyledProps } from 'styled-components'

import breakpoints from './breakpoints'

export interface StyleProps {
  /**
   * CSS properties.
   */
  sx?: StyledProps<any> // eslint-disable-line @typescript-eslint/no-explicit-any
}

/**
 * Gets style.
 */
export function getStyle({ sx }: StyleProps) {
  return Object.keys(sx || {}).reduce((style: Record<string, string | number>, property) => {
    const value = sx[property]
    const breakpoint = breakpoints[property as keyof typeof breakpoints]
    if (typeof breakpoint === 'number') {
      style[breakpoints.up(breakpoint)] = value
    } else {
      style[property] = value
    }
    return style
  }, {})
}
