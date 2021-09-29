import type React from 'react'

import DividerCurveOne from './assets/divider-curve-variation-one'
import DividerCurveTwo from './assets/divider-curve-variation-two'

export interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The curver divider variant, defaults to 1
   */
  variant?: number
}

export default function DividerCurve({
  variant = 1,
}: ComponentProps): React.ReactElement<ComponentProps> {
  if (variant === 2) {
    return <DividerCurveTwo />
  }
  return <DividerCurveOne />
}
