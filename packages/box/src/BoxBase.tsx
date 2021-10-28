import breakpoints from '@littlespoon/theme/lib/breakpoints'
import styled from 'styled-components'

import { BoxProps } from './Box'

export const BoxBase = styled.div<BoxProps>(getStyle)

/**
 * Gets style.
 */
export function getStyle({ sx }: BoxProps) {
  return Object.keys(sx || {}).reduce((style: Record<string, string | number>, property) => {
    const value = sx[property]
    // @ts-ignore
    const breakpoint = breakpoints[property]
    if (typeof breakpoint === 'number') {
      style[breakpoints.up(breakpoint)] = value
    } else {
      style[property] = value
    }
    return style
  }, {})
}
