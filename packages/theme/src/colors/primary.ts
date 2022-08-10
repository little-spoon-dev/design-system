import { rgb } from '../utils'

/**
 * Brand Blue
 *
 * {@link https://zeroheight.com/3ddd0f892/p/028ae9-colors/t/12d188}
 */
export const brand10 = rgb(230, 252, 250)
export const brand20 = rgb(184, 247, 241)
export const brand30 = rgb(138, 242, 232)
export const brand40 = rgb(92, 237, 223)
export const brand50 = rgb(46, 232, 214)
export const brand60 = rgb(0, 227, 205)
export const brand70 = rgb(0, 186, 168)
export const brand80 = rgb(0, 145, 131)
export const brand90 = rgb(0, 104, 94)
export const brand100 = rgb(0, 64, 57)

export const brand = {
  brand10,
  brand20,
  brand30,
  brand40,
  brand50,
  brand60,
  brand70,
  brand80,
  brand90,
  brand100,
}

/**
 * @deprecated Use brand instead.
 */
export const blue10 = brand10
export const blue20 = brand20
export const blue30 = brand30
export const blue40 = brand40
export const blue50 = brand50
export const blue60 = brand60
export const blue70 = brand70
export const blue80 = brand80
export const blue90 = brand90
export const blue100 = brand100

/**
 * @deprecated Use brand instead.
 */
export const primaryBlue = {
  blue10,
  blue20,
  blue30,
  blue40,
  blue50,
  blue60,
  blue70,
  blue80,
  blue90,
  blue100,
}

export type BrandColor = keyof typeof brand
export type PrimaryBlueColor = keyof typeof primaryBlue
export type PrimaryColor = BrandColor | PrimaryBlueColor

export const primaryColors = {
  ...brand,
  ...primaryBlue,
}

export default {
  brand,
  primaryBlue,
}
