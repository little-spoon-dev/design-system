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
import styled, { css } from 'styled-components'

import { CAPTION_TYPE, DISPLAY_TYPE, HEADING_TYPE, PARAGRAPH, PARAGRAPH_TYPE } from './constants'
import type { TypographyProps, VariantString } from './Typography'

type CaptionType = (typeof CAPTION_TYPE)[keyof typeof CAPTION_TYPE]
type DisplayType = (typeof DISPLAY_TYPE)[keyof typeof DISPLAY_TYPE]
type HeadingType = (typeof HEADING_TYPE)[keyof typeof HEADING_TYPE]
type ParagraphType = (typeof PARAGRAPH_TYPE)[keyof typeof PARAGRAPH_TYPE]

export const TypographyBase = styled.p<TypographyProps>(
  (props: TypographyProps) => css`
    border: 0;
    margin: 0 0 ${props.noMargin ? '0' : rem(0.8)} 0;
    padding: 0;
    text-align: ${props.center ? 'center' : ''};
    text-transform: ${props.uppercase ? 'uppercase' : ''};
    ${getVariantCss(props)}
    ${getResponsiveCss(props)}
    ${getStyle(props)}
  `,
)

/**
 * Gets variant styles.
 */
function getVariantCss(options: TypographyProps) {
  if (typeof options.variant === 'string') {
    let font = ''
    let lineHeight = ''
    if (Object.values(DISPLAY_TYPE).includes(options.variant as DisplayType)) {
      // See https://zeroheight.com/3ddd0f892/p/211297-typography/t/348dfa
      const { fontSize, lineHeight: displayLineHeight } = display[options.variant as DisplayType]
      font = `${secondaryWeight.bold} ${fontSize} ${secondaryFamily}`
      lineHeight = displayLineHeight
    } else if (Object.values(HEADING_TYPE).includes(options.variant as HeadingType)) {
      // See https://zeroheight.com/3ddd0f892/p/211297-typography/t/440937
      const { fontSize, lineHeight: headingLineHeight } = heading[options.variant as HeadingType]
      font = `${secondaryWeight.bold} ${fontSize} ${secondaryFamily}`
      lineHeight = headingLineHeight
    } else if (Object.values(CAPTION_TYPE).includes(options.variant as CaptionType)) {
      // See https://zeroheight.com/3ddd0f892/p/211297-typography/t/4725bd
      const { fontSize, lineHeight: captionLineHeight } = caption[options.variant as CaptionType]
      font = `${primaryWeight.normal} ${fontSize} ${primaryFamily}`
      lineHeight = captionLineHeight
    } else if (Object.values(PARAGRAPH_TYPE).includes(options.variant as ParagraphType)) {
      // See https://zeroheight.com/3ddd0f892/p/211297-typography/t/294b11
      const { fontSize, lineHeight: paragraphLineHeight } =
        paragraph[options.variant as ParagraphType]
      font = `${primaryWeight.normal} ${fontSize} ${primaryFamily}`
      lineHeight = paragraphLineHeight
    } else {
      // See https://zeroheight.com/3ddd0f892/p/211297-typography/t/48491c
      const { fontSize, lineHeight: paragraphLineHeight } = paragraph.p3
      font = `${primaryWeight.normal} ${fontSize} ${primaryFamily}`
      lineHeight = paragraphLineHeight
    }
    const letterSpacing = getLetterSpacing({
      bold: options.bold,
      uppercase: options.uppercase,
      variant: options.variant,
    })

    return `
      font: ${font};
      line-height: ${lineHeight};
      letter-spacing: ${letterSpacing};
    `
  } else if (typeof options.variant === 'object') {
    const breakpoints = Object.entries(options.variant)
    return breakpoints.reduce((css, [breakpoint, variant]) => {
      if (+breakpoint === 0) {
        css += getVariantCss({ ...options, variant })
      } else {
        css += `
          @media screen and (min-width: ${breakpoint}px) {
            ${getVariantCss({ ...options, variant })} 
          }
        `
      }
      return css
    }, '')
  }

  return ''
}

/**
 * Gets responsive styles.
 */
function getResponsiveCss(props: TypographyProps) {
  if (typeof props.variant !== 'string') {
    return ''
  }

  // See https://zeroheight.com/3ddd0f892/p/211297-typography/t/37ada3
  const responsiveVariant = {
    [DISPLAY_TYPE.DISPLAY1]: HEADING_TYPE.H1,
    [DISPLAY_TYPE.DISPLAY2]: HEADING_TYPE.H1,
    [HEADING_TYPE.H1]: HEADING_TYPE.H2,
    [HEADING_TYPE.H2]: HEADING_TYPE.H3,
    [HEADING_TYPE.H3]: HEADING_TYPE.H4,
    [HEADING_TYPE.H4]: HEADING_TYPE.H5,
    [HEADING_TYPE.H5]: HEADING_TYPE.H6,
    [HEADING_TYPE.H6]: '',
    [HEADING_TYPE.H7]: HEADING_TYPE.H7,
    [PARAGRAPH]: '',
    [PARAGRAPH_TYPE.P0]: PARAGRAPH_TYPE.P1,
    [PARAGRAPH_TYPE.P1]: PARAGRAPH_TYPE.P2,
    [PARAGRAPH_TYPE.P2]: PARAGRAPH_TYPE.P3,
    [PARAGRAPH_TYPE.P3]: '',
    [PARAGRAPH_TYPE.P4]: '',
    [CAPTION_TYPE.CAPTION1]: '',
  }[props.variant]
  if (!responsiveVariant) {
    return ''
  }

  const css = getVariantCss({
    bold: props.bold,
    uppercase: props.uppercase,
    variant: responsiveVariant as VariantString,
  })
  return down(desktop, css)
}

function getLetterSpacing({
  bold,
  uppercase,
  variant,
}: {
  bold?: boolean
  uppercase?: boolean
  variant: VariantString
}) {
  // Do not modify any of the `'normal'` values in this function.
  // There are cases in which the value of the `letter-spacing`
  // property must be overriden
  let letterSpacing = 'normal'
  if (uppercase) {
    if (Object.values(PARAGRAPH_TYPE).includes(variant as ParagraphType)) {
      // See https://zeroheight.com/3ddd0f892/p/211297-typography/t/294b11
      letterSpacing = bold ? rem(0.1) : rem(0.05)
    } else if (Object.values(CAPTION_TYPE).includes(variant as CaptionType)) {
      // See https://zeroheight.com/3ddd0f892/p/211297-typography/t/36c339
      letterSpacing = bold ? rem(0.05) : 'normal'
    }
  }
  return letterSpacing
}
