import { fontFamily, rem } from '../utils'

/**
 * Display 1
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/158618}
 */
export const display1 = {
  fontSize: rem(7.4),
  lineHeight: rem(9.2),
} as const

/**
 * Display 2
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/615eab}
 */
export const display2 = {
  fontSize: rem(6.6),
  lineHeight: rem(8.2),
} as const

export const display = {
  display1,
  display2,
} as const

/**
 * Font-family
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/626dbf}
 */
export const family = fontFamily('Mulish')

/**
 * Headings
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/440937}
 */
export const heading = {
  h1: {
    fontSize: rem(5.2),
    lineHeight: rem(6.5),
  },
  h2: {
    fontSize: rem(4.6),
    lineHeight: rem(5.8),
  },
  h3: {
    fontSize: rem(3.6),
    lineHeight: rem(4.5),
  },
  h4: {
    fontSize: rem(2.9),
    lineHeight: rem(3.6),
  },
  h5: {
    fontSize: rem(2.6),
    lineHeight: rem(3.2),
  },
  h6: {
    fontSize: rem(2),
    lineHeight: rem(2.5),
  },
} as const

/**
 * Font-weight
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/34024f}
 */
export const weight = {
  bold: 700,
  extraBold: 800,
  black: 900,
} as const

export default {
  display,
  family,
  heading,
  weight,
}
