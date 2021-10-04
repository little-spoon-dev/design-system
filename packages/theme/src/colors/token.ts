import { rgb } from '../utils'
import {
  critical10,
  critical20,
  informative10,
  informative20,
  success10,
  success20,
  warning10,
  warning20,
} from './alert'
import { blue60, blue90 } from './primary'
import { grey10, grey20, grey30, grey40, grey60, grey80 } from './secondary'

/**
 * Brand
 *
 * {@link https://zeroheight.com/3ddd0f892/p/028ae9-colors/t/619a9a}
 */
export const brand = blue60()

/**
 * Shade
 *
 * {@link https://zeroheight.com/3ddd0f892/p/028ae9-colors/b/036155/t/492c47}
 */
export const shadeBlack = '#000000'
export const shadeWhite = '#FFFFFF'

/**
 * Surface
 *
 * {@link https://zeroheight.com/3ddd0f892/p/028ae9-colors/t/13b601}
 */
export const surfacePrimary = shadeWhite
export const surfaceSecondary = grey10()
export const surfaceStrong = blue90()
export const surfaceContrast = grey80()
export const surfaceOverlay = grey80(0.8)

/**
 * Sub-surface
 *
 * {@link https://zeroheight.com/3ddd0f892/p/028ae9-colors/t/51c262}
 */
export const subSurfaceSuccess = success10()
export const subSurfaceInformative = informative10()
export const subSurfaceCritical = critical10()
export const subSurfaceWarning = warning10()
export const subSurfaceDull = rgb(251, 251, 251)

/**
 * Border
 *
 * {@link https://zeroheight.com/3ddd0f892/p/028ae9-colors/t/115206}
 */
export const borderMinimal = grey20()
export const borderSubtle = grey30()
export const borderModerate = grey40()
export const borderBold = grey60()
export const borderContrast = grey80()
export const borderSuccess = success20()
export const borderInformative = informative20()
export const borderCritical = critical20()
export const borderWarning = warning20()

export default {
  brand,
  shadeBlack,
  shadeWhite,
  surfacePrimary,
  surfaceSecondary,
  surfaceStrong,
  surfaceContrast,
  surfaceOverlay,
  subSurfaceSuccess,
  subSurfaceInformative,
  subSurfaceCritical,
  subSurfaceWarning,
  subSurfaceDull,
  borderMinimal,
  borderSubtle,
  borderModerate,
  borderBold,
  borderContrast,
  borderSuccess,
  borderInformative,
  borderCritical,
  borderWarning,
}
