import type React from 'react'
import styled from 'styled-components'

const StyledBox = styled.div``

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Box content
   */
  children?: React.ReactNode
}

/**
 * Box
 */
export default function Box(props: BoxProps): React.ReactElement<BoxProps> {
  return <StyledBox {...props} />
}
