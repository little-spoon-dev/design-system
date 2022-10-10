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

import type { TypographyProps } from './Typography'

export const TypographyBase = styled.p<TypographyProps>`
  border: 0;
  margin: ${(props) => `0 0 ${props.noMargin ? '0' : rem(0.8)} 0`};
  padding: 0;
  text-align: ${(props) => props.center && 'center'};
  text-transform: ${(props) => props.uppercase && 'uppercase'};
  letter-spacing: 0.006rem;
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

  if (typeof props.variant === 'string') {
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
       * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/4725bd}
       */
      case 'caption1': {
        const { fontSize, lineHeight: captionLineHeight } = caption[props.variant]
        font = `${primaryWeight.normal} ${fontSize} ${primaryFamily}`
        lineHeight = captionLineHeight
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
  } else if (typeof props.variant === 'object') {
    const breakpoints = Object.entries(props.variant)
    let mediaStyles = ''

    for (const [breakpoint, variant] of breakpoints) {
      if (+breakpoint === 0) {
        mediaStyles += getVariantCss({ variant: variant })
      } else {
        mediaStyles += `@media screen and (min-width: ${breakpoint}px) { ${getVariantCss({
          variant: variant,
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
  display1: 'h1',
  display2: 'h1',
  h1: 'h2',
  h2: 'h3',
  h3: 'h4',
  h4: 'h5',
  h5: 'h6',
  h6: '',
  p: '',
  p1: 'p2',
  p2: 'p3',
  p3: '',
  p4: '',
  caption1: '',
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

  const css = getVariantCss({ variant })
  return down(desktop, css)
}
