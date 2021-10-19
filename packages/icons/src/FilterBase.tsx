import styled from 'styled-components'

import type { FilterIconProps } from './FilterIcon'

const BASE_HEIGHT = 4.4
const BASE_WIDTH = 4.4

function getSvgSizeCss(props: FilterIconProps): string {
  switch (props.size) {
    case 'xsmall':
      return `height: ${BASE_HEIGHT * 0.5}rem; width: ${BASE_WIDTH * 0.5}rem;`
    case 'medium':
      return `height: ${BASE_HEIGHT * 2}rem; width: ${BASE_WIDTH * 2}rem;`
    case 'large':
      return `height: ${BASE_HEIGHT * 3.2}rem; width: ${BASE_WIDTH * 3.2}rem;`
    default:
      return `height: ${BASE_HEIGHT}rem; width: ${BASE_WIDTH}rem;`
  }
}

export const FilterBase = styled.svg<FilterIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s;
  ${getSvgSizeCss}
`
