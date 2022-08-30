import { rem } from '@littlespoon/theme/lib/utils'

/**
 * Returns rotation value for given direction.
 * Works only if icon initially points down
 */
export function getRotate(direction: 'up' | 'left' | 'right' | 'down' | undefined): number {
  switch (direction) {
    case 'up':
      return 180
    case 'left':
      return 90
    case 'right':
      return -90
    case 'down':
    default:
      return 0
  }
}

/**
 * Returns the scale property based on the size (xsmall, small, medium, large)
 * Defaults to 1 (small)
 */
export function getScale(size: 'xsmall' | 'medium' | 'large' | 'small' | undefined): number {
  switch (size) {
    case 'xsmall':
      return 0.5
    case 'medium':
      return 2
    case 'large':
      return 3.2
    case 'small':
    default:
      return 1
  }
}

/**
 * Returns the size in rems based on the size (xsmall, small, medium, large)
 * Base size can be passed, default is 4.4
 */
export function getSvgSize(
  size: 'xsmall' | 'medium' | 'large' | 'small' | undefined,
  baseSize = 4.4,
): string {
  switch (size) {
    case 'xsmall':
      return rem(baseSize * 0.5)
    case 'medium':
      return rem(baseSize * 2)
    case 'large':
      return rem(baseSize * 3.2)
    case 'small':
    default:
      return rem(baseSize)
  }
}
