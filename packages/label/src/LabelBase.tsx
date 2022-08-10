import colors from '@littlespoon/theme/lib/colors'
import { family, weight } from '@littlespoon/theme/lib/fonts/primary'
import { rem } from '@littlespoon/theme/lib/utils'
import styled from 'styled-components'

import type { LabelProps } from './Label'

export const LabelBase = styled.span<LabelProps>`
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
  color: ${colors.shadeBlack};
  ${getBackgroundColor}
  ${getSizeCss}
`

/**
 * Gets size styles.
 */
function getSizeCss(props: LabelProps): string {
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
 * Gets background color.
 */
function getBackgroundColor(props: LabelProps) {
  const { color } = props
  let bgColor

  if (color && colors[color]) {
    if (typeof colors[color] === 'string') {
      bgColor = colors[color]
    } else if (typeof colors[color] === 'function') {
      bgColor = (colors[color] as () => string)()
    }
  } else {
    bgColor = 'transparent'
  }
  return `
    background-color: ${bgColor};
  `
}
