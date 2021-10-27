import type React from 'react'
import styled, { ThemedStyledProps } from 'styled-components'

const StyledBox = styled.div<BoxProps>((props) => props.sx)

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Box content.
   */
  children?: React.ReactNode

  /**
   * Box style.
   */
  sx?: ThemedStyledProps<any, any> // eslint-disable-line @typescript-eslint/no-explicit-any
}

/**
 * Box
 */
export default function Box(props: BoxProps): React.ReactElement<BoxProps> {
  return <StyledBox {...props} />
}
