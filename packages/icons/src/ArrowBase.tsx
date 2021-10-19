import styled from 'styled-components'

import type { ArrowIconProps } from './ArrowIcon'

function getTransformCss(props: ArrowIconProps): string {
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

  let rotate = 0

  switch (props.direction) {
    case 'up':
      rotate = 180
      break
    case 'left':
      rotate = 90
      break
    case 'right':
      rotate = -90
      break
    case 'down':
    default:
      break
  }

  return `transform: scale(${scale}) rotate(${rotate}deg);`
}

export const ArrowBase = styled.svg<ArrowIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s;
  ${getTransformCss}
`
