import { rem } from '@littlespoon/theme/lib/utils'
import styled from 'styled-components'

import type { FilterIconProps } from './FilterIcon'

const BASE_WIDTH_AND_HEIGHT = 4.4

function getSvgSizeCss(props: FilterIconProps): string {
  let size = rem(BASE_WIDTH_AND_HEIGHT)
  switch (props.size) {
    case 'xsmall':
      size = rem(BASE_WIDTH_AND_HEIGHT * 0.5)
      break
    case 'medium':
      size = rem(BASE_WIDTH_AND_HEIGHT * 2)
      break
    case 'large':
      size = rem(BASE_WIDTH_AND_HEIGHT * 3.2)
      break
    case 'small':
    default:
      break
  }
  return `height: ${size}; width: ${size};`
}

export const FilterBase = styled.svg<FilterIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s;
  ${getSvgSizeCss}
`
