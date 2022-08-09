/**
 * Colors
 *
 * {@link https://zeroheight.com/3ddd0f892/p/028ae9-colors/b/8982a2}
 */
import alert, { AlertColor, alertColors } from './alert'
import primary, { PrimaryColor, primaryColors } from './primary'
import secondary, { SecondaryColor, secondaryColors } from './secondary'
import token from './token'

export const allColors: { [key: string]: string | (() => string) } = {
  ...alertColors,
  ...primaryColors,
  ...secondaryColors,
  ...token,
}

export type TokenColor = keyof typeof token
export type Color = AlertColor | PrimaryColor | SecondaryColor | TokenColor

export { alert, primary, secondary, token }
export default {
  alert,
  primary,
  secondary,
  token,
}
