/**
 * Curried function to generate RGBA.
 */
export const rgb =
  (red: number, green: number, blue: number) =>
  (alpha = 1): string =>
    `rgba(${red},${green},${blue},${alpha})`
