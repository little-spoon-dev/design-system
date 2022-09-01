import { ReactNode } from 'react'

import { Divider, Item, List } from './styled'

interface AccordionItemProps {
  children?: ReactNode
}

export function AccordionItem({ children }: AccordionItemProps) {
  return (
    <Item>
      {children}
      <Divider className="accordion-divider" />
    </Item>
  )
}

export default List
export { List as Accordion }
