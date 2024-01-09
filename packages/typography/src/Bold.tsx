// primary and secondary share the same font-weight values
import { weight } from '@littlespoon/theme/lib/fonts/secondary'
import styled from 'styled-components'

import type { TypographyProps } from './Typography'

type Props = Pick<TypographyProps, 'black' | 'bold' | 'extraBold'>

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

  return `
    font-weight: ${fontWeight};
  `
}
