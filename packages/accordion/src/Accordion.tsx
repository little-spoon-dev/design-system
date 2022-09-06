import { ReactNode, useState } from 'react'

import { Divider, Item, List } from './styled'

interface AccordionItemProps {
  children?: ReactNode
  className?: string
}
/* istanbul ignore next */
export function useAccordionController() {
  const [activeItem, setActiveItem] = useState<number>()

  const handleItemClick = (index: number) => {
    setActiveItem((prev) => (prev === index ? undefined : index))
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

export default List
export { List as Accordion }
