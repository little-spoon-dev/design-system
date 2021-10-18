import styled from 'styled-components'

import type { FilterIconProps } from './FilterIcon'

const BASE_HEIGHT = 44
const BASE_WIDTH = 44

function getSvgSizeCss(props: FilterIconProps): string {
  switch (props.size) {
    case 'xsmall':
      return `height: ${BASE_HEIGHT * 0.5}px; width: ${BASE_WIDTH * 0.5}px;`
    case 'medium':
      return `height: ${BASE_HEIGHT * 2}px; width: ${BASE_WIDTH * 2}px;`
    case 'large':
      return `height: ${BASE_HEIGHT * 3.2}px; width: ${BASE_WIDTH * 3.2}px;`
    default:
      return `height: ${BASE_HEIGHT}px; width: ${BASE_WIDTH}px;`
  }
}

export const FilterBase = styled.svg<FilterIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;
  transition: transform 0.4s;
  ${getSvgSizeCss}
`
