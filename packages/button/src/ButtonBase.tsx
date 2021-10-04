import { informative50 } from '@littlespoon/theme/lib/colors/alert'
import { blue30, blue60, blue80 } from '@littlespoon/theme/lib/colors/primary'
import { grey20, grey40, grey70, grey80 } from '@littlespoon/theme/lib/colors/secondary'
import { shadeBlack, shadeWhite } from '@littlespoon/theme/lib/colors/token'
import { primary } from '@littlespoon/theme/lib/fonts'
import styled from 'styled-components'

import type { ButtonProps } from './Button'

/**
 * Gets size styles.
 */
function getSizeCss(props: ButtonProps<'button'>): string {
  switch (props.size) {
    case 'small':
      return `
        font-size: ${primary.button.small.fontSize};
        height: 3.2rem;
        line-height: ${primary.button.small.lineHeight};
        letter-spacing: ${primary.button.small.letterSpacing};
        padding: 0.6rem 1.6rem;
      `

    case 'medium':
      return `
        font-size: ${primary.button.medium.fontSize};
        height: 4rem;
        line-height: ${primary.button.small.lineHeight};
        letter-spacing: ${primary.button.medium.letterSpacing};
        padding: 0.8rem 1.8rem;
      `

    case 'large':
      return `
        font-size: ${primary.button.large.fontSize};
        height: 5rem;
        line-height: ${primary.button.small.lineHeight};
        letter-spacing: ${primary.button.large.letterSpacing};
        padding: 1.2rem 2.2rem;
      `

    case 'xlarge':
      return `
        font-size: ${primary.button.xlarge.fontSize};
        height: 5.8rem;
        line-height: ${primary.button.small.lineHeight};
        letter-spacing: ${primary.button.xlarge.letterSpacing};
        padding: 1.4rem 2.4rem;
      `

    default:
      return ''
  }
}

/**
 * Gets variant styles.
 */
function getVariantCss(props: ButtonProps<'button'>): string {
  /**
   * {@link https://zeroheight.com/3ddd0f892/p/01a397-buttons/t/190120}
   */
  if (props.disabled) {
    return `
      background-color: ${grey20()};
      color: ${grey40()};
      &:focus {
        outline: 0.2rem solid ${informative50()};
        outline-offset: 0.2rem;
      }
      &:hover {
        background-color: ${grey20()};
        cursor: default;
      }
      &:active {
        background-color: ${grey80()};
      }
    `
  }

  switch (props.variant) {
    /**
     * {@link https://zeroheight.com/3ddd0f892/p/01a397-buttons/t/190120}
     */
    case 'primary':
      return `
        background-color: ${shadeBlack};
        color: ${shadeWhite};
        &:focus {
          outline: 0.2rem solid ${informative50()};
          outline-offset: 0.2rem;
        }
        &:hover {
          background-color: ${grey70()};
        }
        &:active {
          background-color: ${grey80()};
        }
      `

    /**
     * {@link https://zeroheight.com/3ddd0f892/p/01a397-buttons/t/06560c}
     */
    case 'secondary':
      return `
        background-color: ${blue60()};
        color: ${shadeBlack};
        &:focus {
          outline: 0.2rem solid ${informative50()};
          outline-offset: 0.2rem;
        }
        &:hover {
          background-color: ${blue30()};
        }
        &:active {
          background-color: ${blue80()};
        }
      `

    default:
      return ''
  }
}

export const ButtonBase = styled.button<ButtonProps<'button'>>`
  align-items: center;
  border: 0;
  border-radius: 0.5rem;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font: ${primary.weight.bold} 1.6rem ${primary.family};
  width: fit-content;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  text-decoration: none;
  ${getSizeCss}
  ${getVariantCss}
`
