// mobile
export const mobile = 0

export const xs = 340

export const sm = 550

// tablet
export const md = 768

export const tablet = md

// desktop
export const lg = 1000

export const desktop = lg

export const xl = 1200

export const xxl = 1600

export const up = (min: number, css: string) => `@media (min-width: ${min}px) { ${css} }`

export const down = (max: number, css: string) => `@media (max-width: ${max}px) { ${css} }`

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
