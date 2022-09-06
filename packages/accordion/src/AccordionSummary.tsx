import AddIcon from '@littlespoon/icons/lib/AddIcon'
import SubtractIcon from '@littlespoon/icons/lib/SubtractIcon'
import { MouseEventHandler, ReactNode } from 'react'

import { ButtonWrapper } from './styled'

interface AccordionSummaryProps {
  children?: ReactNode
  isExpanded?: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function AccordionSummary({
  isExpanded = false,
  onClick,
  children,
  className,
}: AccordionSummaryProps) {
  return (
    <ButtonWrapper type="button" onClick={onClick} aria-expanded={isExpanded} className={className}>
      {children}
      {isExpanded ? <SubtractIcon /> : <AddIcon />}
    </ButtonWrapper>
  )
}
