import type React from 'react'

import { dividerSVG } from './assets/dividerSVG'

export interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The curve divider variant, defaults to false
   */
  inverted?: boolean
}

export default function Divider({
  inverted = false,
}: ComponentProps): React.ReactElement<ComponentProps> {
  return dividerSVG(inverted)
}
