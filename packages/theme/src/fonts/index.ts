/**
 * Fonts
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/b/655ccf}
 */

const rems: Record<string, string> = {}

const rem = (value: number): string => rems[value] || (rems[value] = `${value}rem`)

const xLargeParagraph = {
  fontSize: rem(2),
  lineHeight: rem(3),
}

const largeParagraph = {
  fontSize: rem(1.8),
  lineHeight: rem(2.6),
}

const mediumParagraph = {
  fontSize: rem(1.6),
  lineHeight: rem(2.4),
}

const smallParagraph = {
  fontSize: rem(1.4),
  lineHeight: rem(2),
}

export const primary = {
  family: 'Lato, sans-serif',
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
}

export const secondary = {
  family: 'Mulish, sans-serif',
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
}

export default { primary, secondary }
