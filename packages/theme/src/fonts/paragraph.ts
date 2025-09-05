import { rem } from '../utils'

/**
 * Paragraph 0
 *
 * {@link https://www.figma.com/design/nA4qwDxm2VGkCUCWx3RaW7/Design-System---Working?node-id=1023-36721&m=dev}
 */
export const p0 = {
  fontSize: rem(2.4),
  lineHeight: rem(3.2),
} as const

/**
 * Paragraph 1
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/9540b4}
 */
export const p1 = {
  fontSize: rem(2),
  lineHeight: rem(3),
} as const

export const xlarge = p1

/**
 * Paragraph 2
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/41a82b}
 */
export const p2 = {
  fontSize: rem(1.8),
  lineHeight: rem(2.6),
} as const

export const large = p2

/**
 * Paragraph 3
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/48491c}
 */
export const p3 = {
  fontSize: rem(1.6),
  lineHeight: rem(2.4),
} as const

export const medium = p3

/**
 * Paragraph 4
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/7711fe}
 */
export const p4 = {
  fontSize: rem(1.4),
  lineHeight: rem(2),
} as const

export const small = p4

export default {
  p0,
  p1,
  xlarge,
  p2,
  large,
  p3,
  medium,
  p4,
  small,
}
