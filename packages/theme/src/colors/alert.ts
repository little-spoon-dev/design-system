import { rgb } from '../utils'

/**
 * Success
 *
 * {@link https://zeroheight.com/3ddd0f892/p/028ae9-colors/t/193927}
 */
export const success10 = rgb(230, 241, 238)
export const success20 = rgb(153, 199, 187)
export const success30 = rgb(102, 172, 152)
export const success40 = rgb(51, 144, 118)
export const success50 = rgb(0, 116, 84)

export const success = {
  success10,
  success20,
  success30,
  success40,
  success50,
}

/**
 * Warning
 *
 * {@link https://zeroheight.com/3ddd0f892/p/028ae9-colors/t/76323f}
 */
export const warning10 = rgb(254, 243, 233)
export const warning20 = rgb(252, 208, 168)
export const warning30 = rgb(251, 185, 124)
export const warning40 = rgb(249, 161, 81)
export const warning50 = rgb(248, 138, 37)

export const warning = {
  warning10,
  warning20,
  warning30,
  warning40,
  warning50,
}

/**
 * Critical
 *
 * {@link https://zeroheight.com/3ddd0f892/p/028ae9-colors/t/07d378}
 */
export const critical10 = rgb(250, 233, 231)
export const critical20 = rgb(237, 169, 159)
export const critical30 = rgb(227, 125, 111)
export const critical40 = rgb(218, 82, 63)
export const critical50 = rgb(209, 39, 15)

export const critical = {
  critical10,
  critical20,
  critical30,
  critical40,
  critical50,
}

/**
 * Informative
 *
 * {@link https://zeroheight.com/3ddd0f892/p/028ae9-colors/t/90e5b5}
 */
export const informative10 = rgb(233, 239, 249)
export const informative20 = rgb(169, 193, 231)
export const informative30 = rgb(125, 161, 220)
export const informative40 = rgb(82, 130, 208)
export const informative50 = rgb(39, 99, 196)

export const informative = {
  informative10,
  informative20,
  informative30,
  informative40,
  informative50,
}

export type SuccessColor = keyof typeof success
export type WarningColor = keyof typeof warning
export type CriticalColor = keyof typeof critical
export type InformativeColor = keyof typeof informative
export type AlertColor = SuccessColor | WarningColor | CriticalColor | InformativeColor

export const alertColors = {
  ...success,
  ...warning,
  ...critical,
  ...informative,
}

export default {
  success,
  warning,
  critical,
  informative,
}
