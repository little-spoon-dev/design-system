import colors from '@littlespoon/theme/lib/colors'
import { p3, p4 } from '@littlespoon/theme/lib/fonts/paragraph'
import { family, weight } from '@littlespoon/theme/lib/fonts/primary'
import styled from 'styled-components'

export const Wrapper = styled.div<{
  isExpanded: boolean
  expandedHeight: number
}>`
  position: relative;
  height: ${(props) => (props.isExpanded ? `${props.expandedHeight / 10}rem` : '0')};
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  visibility: ${(props) => (props.isExpanded ? 'visible' : 'hidden')};
`

export const List = styled.dl`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Item = styled.dt`
  color: ${colors.token.shadeBlack};

  &:last-child .accordion-divider {
    display: none;
  }
`

export const ButtonWrapper = styled.button`
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  line-height: ${p3.lineHeight};
  font: ${weight.bold} ${p3.fontSize} ${family};
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  color: ${colors.token.shadeBlack};
`

export const Content = styled.div`
  letter-spacing: 0.3px;
  font: ${weight.normal} ${p4.fontSize} ${family};
`

export const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  background: ${colors.borderMinimal};
  margin: 0.8rem 0;
`
