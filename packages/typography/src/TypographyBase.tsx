import {
  family as primaryFamily,
  paragraph,
  weight as primaryWeight,
} from '@littlespoon/theme/lib/fonts/primary'
import {
  display,
  family as secondaryFamily,
  heading,
  weight as secondaryWeight,
} from '@littlespoon/theme/lib/fonts/secondary'
import { rem } from '@littlespoon/theme/lib/utils'
import styled from 'styled-components'

import type { TypographyProps } from './Typography'

export const TypographyBase = styled.p<TypographyProps>`
  border: 0;
  padding: 0;
  ${(props) => `margin: 0 0 ${props.noMargin ? '0' : rem(0.8)} 0;`}
  ${(props) => props.uppercase && `text-transform: uppercase;`}
  ${getVariantCss}
`

/**
 * Gets variant styles.
 */
function getVariantCss(props: TypographyProps) {
  let font: string
  let lineHeight: string

  switch (props.variant) {
    /**
     * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/348dfa}
     */
    case 'display1':
    case 'display2': {
      const { fontSize, lineHeight: displayLineHeight } = display[props.variant]
      font = `${secondaryWeight.bold} ${fontSize} ${secondaryFamily}`
      lineHeight = displayLineHeight
      break
    }

    /**
     * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/440937}
     */
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6': {
      const { fontSize, lineHeight: headingLineHeight } = heading[props.variant]
      font = `${secondaryWeight.bold} ${fontSize} ${secondaryFamily}`
      lineHeight = headingLineHeight
      break
    }

    /**
     * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/294b11}
     */
    case 'p1':
    case 'p2':
    case 'p3':
    case 'p4': {
      const { fontSize, lineHeight: paragraphLineHeight } = paragraph[props.variant]
      font = `${primaryWeight.normal} ${fontSize} ${primaryFamily}`
      lineHeight = paragraphLineHeight
      break
    }

    /**
     * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/48491c}
     */
    case 'p':
    default: {
      const { fontSize, lineHeight: paragraphLineHeight } = paragraph.p3
      font = `${primaryWeight.normal} ${fontSize} ${primaryFamily}`
      lineHeight = paragraphLineHeight
      break
    }
  }

  return `font: ${font}; line-height: ${lineHeight};`
}
