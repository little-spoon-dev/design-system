import { ReactNode } from 'react'

import { Content, Wrapper } from './styled'

interface AccordionDetailsProps {
  children?: ReactNode
  isExpanded?: boolean
}

export function AccordionDetails({ children, isExpanded = false }: AccordionDetailsProps) {
  return (
    <Wrapper isExpanded={isExpanded}>
      <Content>{children}</Content>
    </Wrapper>
  )
}
