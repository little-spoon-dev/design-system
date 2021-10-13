import { rem } from '../utils'

/**
 * Paragraph 1
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/9540b4}
 */
export const xlarge = {
  fontSize: rem(2),
  lineHeight: rem(3),
} as const

/**
 * Paragraph 2
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/41a82b}
 */
export const large = {
  fontSize: rem(1.8),
  lineHeight: rem(2.6),
} as const

/**
 * Paragraph 3
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/48491c}
 */
export const medium = {
  fontSize: rem(1.6),
  lineHeight: rem(2.4),
} as const

/**
 * Paragraph 4
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/7711fe}
 */
export const small = {
  fontSize: rem(1.4),
  lineHeight: rem(2),
} as const

export default {
  xlarge,
  large,
  medium,
  small,
}
