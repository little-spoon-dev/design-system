import OpenIcon from '@littlespoon/icons/lib/OpenIcon'
import SubtractIcon from '@littlespoon/icons/lib/SubtractIcon'
import { MouseEventHandler, ReactNode } from 'react'

import { ButtonWrapper } from './styled'

interface AccordionSummaryProps {
  children?: ReactNode
  isExpanded?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function AccordionSummary({ isExpanded = false, onClick, children }: AccordionSummaryProps) {
  return (
    <ButtonWrapper type="button" onClick={onClick} aria-expanded={isExpanded}>
      {children}
      {isExpanded && <SubtractIcon />}
      {!isExpanded && <OpenIcon />}
    </ButtonWrapper>
  )
}
