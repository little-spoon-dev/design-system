/**
 * Colors
 *
 * {@link https://zeroheight.com/3ddd0f892/p/028ae9-colors/b/8982a2}
 */
import alert from './alert'
import primary from './primary'
import secondary from './secondary'
import token from './token'

const colors = {
  ...alert.critical,
  ...alert.informative,
  ...alert.success,
  ...alert.warning,
  ...primary.brand,
  ...primary.primaryBlue,
  ...secondary.secondaryBlue,
  ...secondary.secondaryDeepGreen,
  ...secondary.secondaryGold,
  ...secondary.secondaryLimeGreen,
  ...secondary.secondaryMintGreen,
  ...secondary.secondaryNeutralGrey,
  ...secondary.secondaryPeach,
  ...secondary.secondaryPeach,
  ...secondary.secondaryPink,
  ...token,
  alert,
  primary,
  secondary,
  token,
}

export { alert, primary, secondary, token }
export type Color = keyof typeof colors
export default colors
