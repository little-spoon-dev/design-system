import { ReactNode, useState } from 'react'

import { Divider, Item, List } from './styled'

interface AccordionItemProps {
  children?: ReactNode
  className?: string
}

export default List
export { List as Accordion }

/* istanbul ignore next */
export function useAccordionController() {
  const [activeItem, setActiveItem] = useState<number | null>()

  const handleItemClick = (index: number) => {
    setActiveItem((prev) => (prev === index ? null : index))
  }

  return { activeItem, handleItemClick }
}

export function AccordionItem({ children, className }: AccordionItemProps) {
  return (
    <Item className={className}>
      {children}
      <Divider />
    </Item>
  )
}
