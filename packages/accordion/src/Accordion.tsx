import { OpenIcon, SubtractIcon } from '@littlespoon/ui/icons'
import { ReactNode, useState } from 'react'

import ExpandableContent from './AccordionContent'
import { ButtonWrapper, Content, Divider, Item, List } from './styled'

export interface AccordionProps {
  items: Array<{
    header: ReactNode
    content: ReactNode
  }>
}

export default function Accordion(props: AccordionProps) {
  const self = useController()
  return (
    <List>
      {props.items.map((item, i) => (
        <Item key={i}>
          <ButtonWrapper type="button" onClick={() => self.handleClick(i)}>
            {item.header}
            {self.selectedItem === i && <SubtractIcon />}
            {self.selectedItem !== i && <OpenIcon />}
          </ButtonWrapper>
          <ExpandableContent isExpanded={self.selectedItem === i}>
            <Content>{item.content}</Content>
          </ExpandableContent>
          <Divider className="accordion-divider" />
        </Item>
      ))}
    </List>
  )
}

function useController() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const handleClick = (i: number) => {
    setSelectedItem((currentIndex) => {
      if (i === currentIndex) {
        return null
      }
      return i
    })
  }

  return { selectedItem, handleClick }
}
