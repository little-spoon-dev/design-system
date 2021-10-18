import styled from 'styled-components'

import type { FilterIconProps } from './FilterIcon'

function getSvgSizeCss(props: FilterIconProps): string {
  switch (props.size) {
    case 'xsmall':
      return 'transform: scale(0.5);'
    case 'medium':
      return 'transform: scale(2);'
    case 'large':
      return 'transform: scale(3.2);'
    default:
      return 'transform: scale(1);'
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
