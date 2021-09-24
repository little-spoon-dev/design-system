import styled from 'styled-components'

import type { ArrowIconProps } from './ArrowIcon'

function getSvgSizeCss(props: ArrowIconProps): string {
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

export const ArrowBase = styled.svg<ArrowIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;
  transition: transform 0.4s;
  ${getSvgSizeCss}
`
