import { informative50 } from '@littlespoon/theme/lib/colors/alert'
import { blue30, blue60, blue80 } from '@littlespoon/theme/lib/colors/primary'
import { grey20, grey40, grey70, grey80 } from '@littlespoon/theme/lib/colors/secondary'
import { shadeBlack, shadeWhite } from '@littlespoon/theme/lib/colors/token'
import { primary } from '@littlespoon/theme/lib/fonts'
import styled, { css } from 'styled-components'

import type { ButtonProps } from './Button'

function getSizeCss(props: ButtonProps): string {
  switch (props.size) {
    case 'small':
      return `
        font-size: ${primary.button4.fontSize};
        height: 3.2rem;
        line-height: 2rem;
        padding: 0.6rem 1.6rem;
      `

    case 'medium':
      return `
        font-size: ${primary.button3.fontSize};
        height: 4rem;
        line-height: 2.4rem;
        padding: 0.8rem 1.8rem;
      `

    case 'large':
      return `
        font-size: ${primary.button2.fontSize};
        height: 5rem;
        line-height: 2.6rem;
        padding: 1.2rem 2.2rem;
      `

    case 'xlarge':
      return `
        font-size: ${primary.button1.fontSize};
        height: 5.8rem;
        line-height: 3rem;
        padding: 1.4rem 2.4rem;
      `

    default:
      return ''
  }
}

const sizeCss = css<ButtonProps>`
  ${getSizeCss}
`

function getVariantCss(props: ButtonProps): string {
  switch (props.variant) {
    /**
     * {@link https://zeroheight.com/3ddd0f892/p/01a397-buttons/t/190120}
     */
    case 'primary':
      return `
        background-color: ${props.disabled ? grey20() : shadeBlack};
        color: ${props.disabled ? grey40() : shadeWhite};
        &:focus {
          outline: 0.2rem solid ${informative50()};
          outline-offset: 0.2rem;
        }
        ${
          props.disabled
            ? `
        &:hover {
          background-color: ${grey20()};
          cursor: default;
        }
        `
            : `
        &:hover {
          background-color: ${grey70()};
        }
        `
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
        background-color: ${props.disabled ? grey20() : blue60()};
        color: ${props.disabled ? grey40() : shadeBlack};
        &:focus {
          outline: 0.2rem solid ${informative50()};
          outline-offset: 0.2rem;
        }
        ${
          props.disabled
            ? `
            &:hover {
              background-color: ${grey20()};
              cursor: default;
            }
            `
            : `
            &:hover {
              background-color: ${blue30()};
            }
            `
        }

        &:active {
          background-color: ${blue80()};
        }
      `

    default:
      return ''
  }
}

const variantCss = css<ButtonProps>`
  ${getVariantCss}
`

export const ButtonBase = styled.button<ButtonProps>`
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: ${primary.family};
  font-weight: ${primary.weight.bold};
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  ${sizeCss}
  ${variantCss}
`
