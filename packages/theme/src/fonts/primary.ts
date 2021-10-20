import { fontFamily, rem } from '../utils'
import p from './paragraph'

const buttonLetterSpacing = rem(0.15)

/**
 * Buttons
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/55397a}
 */
export const button = {
  xlarge: {
    ...p.xlarge,
    letterSpacing: buttonLetterSpacing,
  },
  large: {
    ...p.large,
    letterSpacing: buttonLetterSpacing,
  },
  medium: {
    ...p.medium,
    letterSpacing: buttonLetterSpacing,
  },
  small: {
    ...p.small,
    letterSpacing: buttonLetterSpacing,
  },
} as const

/**
 * Caption 1
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/4725bd}
 */
export const caption1 = {
  fontSize: rem(1.2),
  lineHeight: rem(1.8),
} as const

export const caption = {
  caption1,
  medium: caption1,
} as const

/**
 * Font-family
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/626dbf}
 */
export const family = fontFamily('Lato')

/**
 * Paragraph
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/294b11}
 */
export const paragraph = p

/**
 * Font-weight
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/34024f}
 */
export const weight = {
  normal: 400,
  bold: 700,
} as const

export default {
  button,
  caption,
  family,
  paragraph,
  weight,
}
