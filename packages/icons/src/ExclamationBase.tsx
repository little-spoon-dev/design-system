import styled from 'styled-components'

import type { ExclamationIconProps } from './ExclamationIcon'

function getTransformCss(props: ExclamationIconProps): string {
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

export const ExclamationBase = styled.svg<ExclamationIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s;
  ${getTransformCss}
`
