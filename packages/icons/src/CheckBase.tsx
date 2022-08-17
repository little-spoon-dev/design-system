import styled from 'styled-components'

import type { CheckIconProps } from './CheckIcon'

function getTransformCss(props: CheckIconProps): string {
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

export const CheckIconBase = styled.svg<CheckIconProps>`
  transition: transform 0.4s;
  ${getTransformCss}
`
