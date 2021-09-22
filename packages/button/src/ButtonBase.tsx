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
function getSizeCss(props: ButtonProps): string {
  switch (props.size) {
    case 'small':
      return `
        font-size: 1.4rem;
        height: 3.2rem;
        line-height: 2rem;
        padding: 0.6rem 1.6rem;
      `

    case 'medium':
      return `
        font-size: 1.6rem;
        height: 4rem;
        line-height: 2.4rem;
        padding: 0.8rem 1.8rem;
      `

    case 'large':
      return `
        font-size: 1.8rem;
        height: 5rem;
        line-height: 2.6rem;
        padding: 1.2rem 2.2rem;
      `

    case 'xlarge':
      return `
        font-size: 2rem;
        height: 5.8rem;
        line-height: 3rem;
        padding: 1.4rem 2.4rem;
      `

    default:
      return ''
  }
}

/**
 * Gets variant styles.
 */
function getVariantCss(props: ButtonProps): string {
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

export const ButtonBase = styled.button<ButtonProps>`
  border: 0;
  border-radius: 0.5rem;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font: ${primary.weight.bold} 1.6rem ${primary.family};
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  text-decoration: none;
  ${getSizeCss}
  ${getVariantCss}
`
