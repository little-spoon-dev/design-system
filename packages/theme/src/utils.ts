export const fontFamily = (name: string): string => `${name}, sans-serif`

export const remMap: Record<string, string> = {}

export const rem = (value: number): string => remMap[value] || (remMap[value] = `${value}rem`)

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
