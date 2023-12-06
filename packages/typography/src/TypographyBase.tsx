import { desktop, down } from '@littlespoon/theme/lib/breakpoints'
import {
  caption,
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
import { getStyle } from '@littlespoon/theme/lib/style'
import { rem } from '@littlespoon/theme/lib/utils'
import styled from 'styled-components'

import { CaptionType, DisplayType, HeadingType, Paragraph, ParagraphType } from './constants'
import type { TypographyProps, Variant } from './Typography'
import { getLetterSpacingCssValue } from './util'

type CaptionTypeType = (typeof CaptionType)[keyof typeof CaptionType]
type DisplayTypeType = (typeof DisplayType)[keyof typeof DisplayType]
type HeadingTypeType = (typeof HeadingType)[keyof typeof HeadingType]
type ParagraphTypeType = (typeof ParagraphType)[keyof typeof ParagraphType]

export const TypographyBase = styled.p<TypographyProps>`
  border: 0;
  margin: ${(props) => `0 0 ${props.noMargin ? '0' : rem(0.8)} 0`};
  padding: 0;
  text-align: ${(props) => props.center && 'center'};
  text-transform: ${(props) => props.uppercase && 'uppercase'};
  ${getVariantCss}
  ${getResponsiveCss}
  ${getStyle}
`

/**
 * Gets variant styles.
 */
function getVariantCss(props: TypographyProps) {
  let font: string
  let lineHeight: string
  let letterSpacing = ''

  if (typeof props.variant === 'string') {
    if (Object.values(DisplayType).includes(props.variant as DisplayTypeType)) {
      // See https://zeroheight.com/3ddd0f892/p/211297-typography/t/348dfa
      const { fontSize, lineHeight: displayLineHeight } = display[props.variant as DisplayTypeType]
      font = `${secondaryWeight.bold} ${fontSize} ${secondaryFamily}`
      lineHeight = displayLineHeight
    } else if (Object.values(HeadingType).includes(props.variant as HeadingTypeType)) {
      // See https://zeroheight.com/3ddd0f892/p/211297-typography/t/440937
      const { fontSize, lineHeight: headingLineHeight } = heading[props.variant as HeadingTypeType]
      font = `${secondaryWeight.bold} ${fontSize} ${secondaryFamily}`
      lineHeight = headingLineHeight
    } else if (Object.values(CaptionType).includes(props.variant as CaptionTypeType)) {
      // See https://zeroheight.com/3ddd0f892/p/211297-typography/t/4725bd
      const { fontSize, lineHeight: captionLineHeight } = caption[props.variant as CaptionTypeType]
      font = `${primaryWeight.normal} ${fontSize} ${primaryFamily}`
      lineHeight = captionLineHeight
    } else if (Object.values(ParagraphType).includes(props.variant as ParagraphTypeType)) {
      // See https://zeroheight.com/3ddd0f892/p/211297-typography/t/294b11
      const { fontSize, lineHeight: paragraphLineHeight } =
        paragraph[props.variant as ParagraphTypeType]
      font = `${primaryWeight.normal} ${fontSize} ${primaryFamily}`
      lineHeight = paragraphLineHeight
      letterSpacing = getLetterSpacingCssValue({
        bold: props.bold,
        uppercase: props.uppercase,
        variant: props.variant,
      })
    } else {
      // See https://zeroheight.com/3ddd0f892/p/211297-typography/t/48491c
      const { fontSize, lineHeight: paragraphLineHeight } = paragraph.p3
      font = `${primaryWeight.normal} ${fontSize} ${primaryFamily}`
      lineHeight = paragraphLineHeight
    }

    return `
      font: ${font};
      letter-spacing: ${letterSpacing};
      line-height: ${lineHeight};
    `
  } else if (typeof props.variant === 'object') {
    const breakpoints = Object.entries(props.variant)
    let mediaStyles = ''

    for (const [breakpoint, variant] of breakpoints) {
      if (+breakpoint === 0) {
        mediaStyles += getVariantCss({ variant })
      } else {
        mediaStyles += `@media screen and (min-width: ${breakpoint}px) { ${getVariantCss({
          variant,
        })} }`
      }
    }

    return mediaStyles
  }

  return ''
}

/**
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/37ada3}
 */
const responsiveStyles = {
  [DisplayType.DISPLAY1]: HeadingType.H1,
  [DisplayType.DISPLAY2]: HeadingType.H1,
  [HeadingType.H1]: HeadingType.H2,
  [HeadingType.H2]: HeadingType.H3,
  [HeadingType.H3]: HeadingType.H4,
  [HeadingType.H4]: HeadingType.H5,
  [HeadingType.H5]: HeadingType.H6,
  [HeadingType.H6]: '',
  [Paragraph]: '',
  [ParagraphType.P1]: ParagraphType.P2,
  [ParagraphType.P2]: ParagraphType.P3,
  [ParagraphType.P3]: '',
  [ParagraphType.P4]: '',
  [CaptionType.CAPTION1]: '',
} as const

/**
 * Gets responsive styles.
 */
function getResponsiveCss(props: TypographyProps) {
  if (!props.variant || typeof props.variant !== 'string') {
    return ''
  }

  const variant = responsiveStyles[props.variant]
  if (!variant) {
    return ''
  }

  const css = getVariantCss({ variant: variant as Variant })
  return down(desktop, css)
}
