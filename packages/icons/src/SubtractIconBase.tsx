import styled from 'styled-components'

import type { SubtractIconProps } from './SubtractIcon'

function getTransformCss(props: SubtractIconProps): string {
  let scale = 1

  switch (props.size) {
    case 'xsmall':
      scale = 0.5
      break
    case 'medium':
      scale = 2
      break
    case 'large':
      scale = 3.2
      break
    case 'small':
    default:
      break
  }

  return `transform: scale(${scale});`
}

export const SubtractIconBase = styled.svg<SubtractIconProps>`
  transition: transform 0.4s;
  ${getTransformCss}
`
