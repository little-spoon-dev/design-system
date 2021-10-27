// mobile
export const mobile = 0

export const xs = 375

export const sm = 550

// tablet
export const md = 768

export const tablet = md

// desktop
export const lg = 1000

export const desktop = lg

export const xl = 1200

export const xxl = 1440

/**
 * Generates media query that matches screen widths greater than the screen size given by the breakpoint (inclusive).
 *
 * @param minWidth - The min-width.
 * @param css - The CSS.
 *
 * @example
 *
 * ```ts
 * breakpoints.up(breakpoints.tablet, 'width: 42rem')
 * // '@media (min-width: 768px) { width: 42rem; }'
 * ```
 */
export const up = (minWidth: number, css: string) => `@media (min-width: ${minWidth}px) { ${css} }`

/**
 * Generates media query that matches screen widths smaller than the screen size given by the breakpoint (inclusive).
 *
 * @param maxWidth - The max-width.
 * @param css - The CSS.
 *
 * @example
 *
 * ```ts
 * breakpoints.down(breakpoints.desktop, 'display: none;')
 * // '@media (max-width: 1000px) { display: none; }'
 * ```
 */
export const down = (maxWidth: number, css: string) =>
  `@media (max-width: ${maxWidth}px) { ${css} }`

const breakpoints = {
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  mobile,
  tablet,
  desktop,
  up,
  down,
} as const

export default breakpoints
