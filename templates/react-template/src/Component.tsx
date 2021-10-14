import type React from 'react'
import styled from 'styled-components'

const StyledComponent = styled.div``

export interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Component content
   */
  children?: React.ReactNode
}

/**
 * Component
 */
export default function Component(props: ComponentProps): React.ReactElement<ComponentProps> {
  return <StyledComponent {...props} />
}
