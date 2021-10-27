import { informative50 } from '@littlespoon/theme/lib/colors/alert'
import { blue30, blue60, blue80 } from '@littlespoon/theme/lib/colors/primary'
import { grey20, grey40, grey70, grey80 } from '@littlespoon/theme/lib/colors/secondary'
import { shadeBlack, shadeWhite } from '@littlespoon/theme/lib/colors/token'
import { button, family, weight } from '@littlespoon/theme/lib/fonts/primary'
import { rem } from '@littlespoon/theme/lib/utils'
import styled from 'styled-components'

import type { ButtonProps } from './Button'

export const ButtonBase = styled.button<ButtonProps<'button'>>`
  align-items: center;
  border-radius: ${rem(0.5)};
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font: ${weight.bold} ${rem(1.6)} ${family};
  letter-spacing: ${rem(0.15)};
  text-decoration: none;
  text-transform: uppercase;
  width: fit-content;
  ${getSizeCss}
  ${getVariantCss}
`

/**
 * Gets size styles.
 */
function getSizeCss(props: ButtonProps<'button'>): string {
  const { size } = props
  if (!size) {
    return ''
  }

  const fontSize = button[size].fontSize
  let height = ''
  const letterSpacing = button[size].letterSpacing
  const lineHeight = button.small.lineHeight
  let padding = ''

  switch (size) {
    case 'small':
      height = rem(3.2)
      padding = `${rem(0.6)} ${rem(1.6)}`
      break

    case 'medium':
      height = rem(4)
      padding = `${rem(0.8)} ${rem(1.8)}`
      break

    case 'large':
      height = rem(5)
      padding = `${rem(1.2)} ${rem(2.2)};`
      break

    case 'xlarge':
      height = rem(5.8)
      padding = `${rem(1.4)} ${rem(2.4)};`
      break
  }

  return `
    font-size: ${fontSize};
    height: ${height};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
    padding: ${padding};
  `
}

/**
 * Gets variant styles.
 */
function getVariantCss(props: ButtonProps<'button'>): string {
  const { disabled, variant } = props

  let backgroundColor = ''
  let border = ''
  let color = ''
  let focusOutline = ''
  let hoverBackgroundColor = ''
  let hoverColor = ''
  let activeBackgroundColor = ''
  let activeColor = ''

  /**
   * {@link https://zeroheight.com/3ddd0f892/p/01a397-buttons/t/190120}
   */
  if (disabled) {
    backgroundColor = grey20()
    color = grey40()
    focusOutline = `${rem(0.2)} solid ${informative50()}`
    hoverBackgroundColor = grey20()
    activeBackgroundColor = grey80()
  } else {
    switch (variant) {
      /**
       * {@link https://zeroheight.com/3ddd0f892/p/01a397-buttons/t/190120}
       */
      case 'primary':
        backgroundColor = shadeBlack
        color = shadeWhite
        focusOutline = `${rem(0.2)} solid ${informative50()};`
        hoverBackgroundColor = grey70()
        activeBackgroundColor = grey80()
        break

      /**
       * {@link https://zeroheight.com/3ddd0f892/p/01a397-buttons/t/06560c}
       */
      case 'secondary':
        backgroundColor = blue60()
        color = shadeBlack
        focusOutline = `${rem(0.2)} solid ${informative50()}`
        hoverBackgroundColor = blue30()
        activeBackgroundColor = blue80()
        break

      /**
       * {@link https://zeroheight.com/3ddd0f892/p/01a397-buttons/t/52ebb4}
       */
      case 'ghost':
        backgroundColor = shadeWhite
        border = `${rem(0.2)} solid ${shadeBlack}}`
        color = shadeBlack
        focusOutline = `${rem(0.2)} solid ${informative50()}`
        hoverBackgroundColor = shadeBlack
        hoverColor = shadeWhite
        activeBackgroundColor = grey80()
        activeColor = shadeWhite
        break
    }
  }

  return `
    background-color: ${backgroundColor};
    border: ${border};
    color: ${color};
    &:focus {
      outline: ${focusOutline};
      outline-offset: ${rem(0.2)};
    }
    &:hover {
      background-color: ${hoverBackgroundColor};
      color: ${hoverColor};
      cursor: ${disabled && 'default'};
    }
    &:active {
      background-color: ${activeBackgroundColor};
      color: ${activeColor};
    }
    &:visited {
      color: ${color};
    }
  `
}
