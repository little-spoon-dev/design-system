import {
  critical20,
  informative20,
  success20,
  warning20,
} from '@littlespoon/theme/lib/colors/alert'
import { brand60 } from '@littlespoon/theme/lib/colors/primary'
import { gold60, limeGreen60, peach60, pink60 } from '@littlespoon/theme/lib/colors/secondary'
import { shadeBlack } from '@littlespoon/theme/lib/colors/token'
import { family, weight } from '@littlespoon/theme/lib/fonts/primary'
import { rem } from '@littlespoon/theme/lib/utils'
import styled from 'styled-components'

import type { LabelProps } from './Label'

export const LabelBase = styled.label<LabelProps<'label'>>`
  align-items: center;
  border-radius: 2px;
  border: 0;
  box-sizing: border-box;
  display: inline-flex;
  font: ${weight.bold} ${rem(2)} ${family};
  letter-spacing: ${rem(0.1)};
  text-decoration: none;
  text-transform: uppercase;
  width: fit-content;
  line-height: 150%;
  color: ${shadeBlack};
  ${getSizeCss}
  ${getVariantCss}
`

/**
 * Gets size styles.
 */
function getSizeCss(props: LabelProps<'label'>): string {
  const { size } = props
  if (!size) {
    return ''
  }
  let height = ''
  let padding = ''
  let fontSize = ''

  switch (size) {
    case 'small':
      height = rem(2.2)
      padding = `${rem(0.2)} ${rem(0.8)}`
      fontSize = rem(1.2)
      break

    case 'medium':
      height = rem(3.2)
      padding = `${rem(0.4)} ${rem(1.6)}`
      fontSize = rem(1.6)
      break

    case 'large':
      height = rem(4.2)
      padding = `${rem(0.6)} ${rem(2.4)};`
      fontSize = rem(2)
      break
  }

  return `
    font-size: ${fontSize};
    height: ${height};
    padding: ${padding};
  `
}

/**
 * Gets variant styles.
 */
function getVariantCss(props: LabelProps<'label'>): string {
  const { variant } = props

  let backgroundColor = ''

  /**
   * {@link https://zeroheight.com/3ddd0f892/p/01a397-labels/t/190120}
   */
  switch (variant) {
    /**
     * {@link https://zeroheight.com/3ddd0f892/p/336556-label/t/07ca52}
     */
    case 'success':
      backgroundColor = success20()
      break

    /**
     * {@link https://zeroheight.com/3ddd0f892/p/336556-label/t/07ca52}
     */
    case 'warning':
      backgroundColor = warning20()
      break

    /**
     * {@link https://zeroheight.com/3ddd0f892/p/336556-label/t/07ca52}
     */
    case 'critical':
      backgroundColor = critical20()
      break

    /**
     * {@link https://zeroheight.com/3ddd0f892/p/336556-label/t/07ca52}
     */
    case 'informative':
      backgroundColor = informative20()
      break

    /**
     * {@link https://zeroheight.com/3ddd0f892/p/336556-label/t/657ada}
     */
    case 'BLW':
      backgroundColor = pink60()
      break

    /**
     * {@link https://zeroheight.com/3ddd0f892/p/336556-label/t/657ada}
     */
    case 'most-popular':
      backgroundColor = brand60()
      break

    /**
     * {@link https://zeroheight.com/3ddd0f892/p/336556-label/t/657ada}
     */
    case 'picky-eater-fave':
      backgroundColor = peach60()
      break

    /**
     * {@link https://zeroheight.com/3ddd0f892/p/336556-label/t/657ada}
     */
    case 'seasonal':
      backgroundColor = gold60()
      break

    /**
     * {@link https://zeroheight.com/3ddd0f892/p/336556-label/t/657ada}
     */
    case 'beggie-packed':
      backgroundColor = limeGreen60()
      break
  }

  return `
    background-color: ${backgroundColor};
  `
}
