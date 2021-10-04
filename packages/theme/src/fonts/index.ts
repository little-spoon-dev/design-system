/**
 * Fonts
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/b/655ccf}
 */

const rems: Record<string, string> = {}

const rem = (value: number): string => rems[value] || (rems[value] = `${value}rem`)

const fontFamily = (name: string): string => `${name}, sans-serif`

const xLargeParagraph = {
  fontSize: rem(2),
  lineHeight: rem(3),
} as const

const largeParagraph = {
  fontSize: rem(1.8),
  lineHeight: rem(2.6),
} as const

const mediumParagraph = {
  fontSize: rem(1.6),
  lineHeight: rem(2.4),
} as const

const smallParagraph = {
  fontSize: rem(1.4),
  lineHeight: rem(2),
} as const

export const primary = {
  family: fontFamily('Lato'),
  paragraph: {
    xlarge: xLargeParagraph,
    large: largeParagraph,
    medium: mediumParagraph,
    small: smallParagraph,
  },
  caption: {
    medium: {
      fontSize: rem(1.2),
      lineHeight: rem(1.8),
    },
  },
  button: {
    xlarge: {
      fontSize: xLargeParagraph.fontSize,
      lineHeight: xLargeParagraph.lineHeight,
      letterSpacing: rem(0.15),
    },
    large: {
      fontSize: largeParagraph.fontSize,
      lineHeight: largeParagraph.lineHeight,
      letterSpacing: rem(0.15),
    },
    medium: {
      fontSize: mediumParagraph.fontSize,
      lineHeight: mediumParagraph.lineHeight,
      letterSpacing: rem(0.15),
    },
    small: {
      fontSize: smallParagraph.fontSize,
      lineHeight: smallParagraph.lineHeight,
      letterSpacing: rem(0.15),
    },
  },
  weight: {
    normal: 400,
    bold: 700,
  },
} as const

export const secondary = {
  family: fontFamily('Mulish'),
  display: {
    large: {
      fontSize: rem(7.4),
      lineHeight: rem(9.2),
    },
    medium: {
      fontSize: rem(6.6),
      lineHeight: rem(8.2),
    },
  },
  heading: {
    h1: {
      fontSize: rem(5.2),
      lineHeight: rem(6.5),
    },
    h2: {
      fontSize: rem(4.6),
      lineHeight: rem(5.8),
    },
    h3: {
      fontSize: rem(3.6),
      lineHeight: rem(4.5),
    },
    h4: {
      fontSize: rem(2.9),
      lineHeight: rem(3.6),
    },
    h5: {
      fontSize: rem(2.6),
      lineHeight: rem(3.2),
    },
    h6: {
      fontSize: rem(2),
      lineHeight: rem(2.5),
    },
  },
  weight: {
    bold: 700,
    extraBold: 800,
    black: 900,
  },
} as const

export default { primary, secondary }
