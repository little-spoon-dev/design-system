// primary and secondary share the same font-weight values
import { weight } from '@littlespoon/theme/lib/fonts/secondary'
import styled from 'styled-components'

import type { TypographyProps } from './Typography'
import { getLetterSpacingCssValue } from './util'

type Props = Pick<TypographyProps, 'black' | 'bold' | 'extraBold' | 'uppercase' | 'variant'>

export const Bold = styled.strong<Props>`
  ${getCss}
`

/**
 * Gets styles.
 */
function getCss(props: Props) {
  let fontWeight = ''
  if (props.black) {
    fontWeight = weight.black.toString()
  } else if (props.extraBold) {
    fontWeight = weight.extraBold.toString()
  } else if (props.bold) {
    fontWeight = weight.bold.toString()
  }

  const letterSpacing: string = getLetterSpacingCssValue({
    bold: props.bold,
    uppercase: props.uppercase,
    variant: props.variant,
  })

  return `
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing};
  `
}
