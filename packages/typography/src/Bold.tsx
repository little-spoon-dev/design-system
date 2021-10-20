// primary and secondary share the same font-weight values
import { weight } from '@littlespoon/theme/lib/fonts/secondary'
import styled from 'styled-components'

import type { TypographyProps } from './Typography'

export const Bold = styled.strong<TypographyProps>`
  ${getCss}
`

/**
 * Gets styles.
 */
function getCss(props: TypographyProps) {
  let fontWeight: number

  switch (true) {
    case props.black:
      fontWeight = weight.black
      break

    case props.extraBold:
      fontWeight = weight.extraBold
      break

    case props.bold:
      fontWeight = weight.bold
      break

    /* istanbul ignore next */
    default:
      return ''
  }

  return `font-weight: ${fontWeight};`
}
