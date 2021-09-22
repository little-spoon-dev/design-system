/**
 * Fonts
 *
 * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/b/655ccf}
 */

const xLargeParagraph = {
  fontSize: '2rem',
  lineHeight: '3rem',
}

const largeParagraph = {
  fontSize: '1.8rem',
  lineHeight: '2.6rem',
}

const mediumParagraph = {
  fontSize: '1.6rem',
  lineHeight: '2.4rem',
}

const smallParagraph = {
  fontSize: '1.4rem',
  lineHeight: '2rem',
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
      fontSize: '1.2rem',
      lineHeight: '1.8rem',
    },
  },
  button: {
    xlarge: {
      fontSize: xLargeParagraph.fontSize,
      lineHeight: xLargeParagraph.lineHeight,
      letterSpacing: '0.15rem',
    },
    large: {
      fontSize: largeParagraph.fontSize,
      lineHeight: largeParagraph.lineHeight,
      letterSpacing: '0.15rem',
    },
    medium: {
      fontSize: mediumParagraph.fontSize,
      lineHeight: mediumParagraph.lineHeight,
      letterSpacing: '0.15rem',
    },
    small: {
      fontSize: smallParagraph.fontSize,
      lineHeight: smallParagraph.lineHeight,
      letterSpacing: '0.15rem',
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
      fontSize: '7.4rem',
      lineHeight: '9.2rem',
    },
    medium: {
      fontSize: '6.6rem',
      lineHeight: '8.2rem',
    },
  },
  heading: {
    large: {
      fontSize: '5.2rem',
      lineHeight: '6.5rem',
    },
    medium: {
      fontSize: '4.6rem',
      lineHeight: '5.8rem',
    },
    small: {
      fontSize: '3.6rem',
      lineHeight: '4.5rem',
    },
    xsmall: {
      fontSize: '2.9rem',
      lineHeight: '3.6rem',
    },
    xxsmall: {
      fontSize: '2.6rem',
      lineHeight: '3.2rem',
    },
    xxxsmall: {
      fontSize: '2rem',
      lineHeight: '2.5rem',
    },
  },
  weight: {
    bold: 700,
    extraBold: 800,
    black: 900,
  },
}

export default { primary, secondary }
