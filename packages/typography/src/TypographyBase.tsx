import {
  family as primaryFamily,
  paragraph,
  weight as primaryWeight,
} from '@littlespoon/theme/lib/fonts/primary'
import {
  family as secondaryFamily,
  heading,
  weight as secondaryWeight,
} from '@littlespoon/theme/lib/fonts/secondary'
import { rem } from '@littlespoon/theme/lib/utils'
import styled from 'styled-components'

import type { TypographyProps } from './Typography'

export const TypographyBase = styled.p<TypographyProps>`
  border: 0;
  padding: 0;
  ${getMarginStyles}
  ${getVariantStyles}
`

/**
 * Gets margin styles.
 */
function getMarginStyles(props: TypographyProps) {
  let styles = 'margin: 0;'
  if (!props.noMargin) {
    styles += `margin-bottom: ${rem(0.8)};`
  }
  return styles
}

/**
 * Gets variant styles.
 */
function getVariantStyles(props: TypographyProps) {
  switch (props.variant) {
    /**
     * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/440937}
     */
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6': {
      const { fontSize, lineHeight } = heading[props.variant]
      return `
        font: ${secondaryWeight.bold} ${fontSize} ${secondaryFamily};
        line-height: ${lineHeight};
      `
    }

    /**
     * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/294b11}
     */
    case 'p1':
    case 'p2':
    case 'p3':
    case 'p4': {
      const { fontSize, lineHeight } = paragraph[props.variant]
      return `
        font: ${primaryWeight.normal} ${fontSize} ${primaryFamily};
        line-height: ${lineHeight};
      `
    }

    /**
     * {@link https://zeroheight.com/3ddd0f892/p/211297-typography/t/48491c}
     */
    case 'p':
    default: {
      const { fontSize, lineHeight } = paragraph.p3
      return `
        font: ${primaryWeight.normal} ${fontSize} ${primaryFamily};
        line-height: ${lineHeight};
      `
    }
  }
}
