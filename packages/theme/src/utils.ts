export const rgbaMap: Record<string, string> = {}

/**
 * Curried function to generate RGBA.
 */
export const rgb =
  (red: number, green: number, blue: number) =>
  (alpha = 1): string => {
    const key = [red, green, blue, alpha].join(',')
    return rgbaMap[key] || (rgbaMap[key] = `rgba(${key})`)
  }
