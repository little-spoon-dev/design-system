import { informative50 } from '@littlespoon/theme/lib/colors/alert'
import { grey40 } from '@littlespoon/theme/lib/colors/secondary'
import { shadeBlack } from '@littlespoon/theme/lib/colors/token'
import { family, paragraph, weight } from '@littlespoon/theme/lib/fonts/primary'
import styled from 'styled-components'

import type { CheckboxGroupProps, CheckboxProps } from './Checkbox'

export const CheckboxWrapper = styled.div<CheckboxProps>`
  font-family: ${family};
  ${paragraph.p3};
  user-select: none;

  color: ${(props) => (props.disabled ? grey40() : shadeBlack)};
  font-weight: ${(props) => (props.checked ? weight.bold : weight.normal)};
  svg {
    margin-right: 1rem;
    path {
      ${(props) => (props.checked ? 'fill' : 'stroke')}: ${(props) =>
        props.disabled ? grey40() : shadeBlack}
    }
  }
`

export const CheckboxLabel = styled.label<CheckboxProps>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`

export const CheckboxItem = styled.input<CheckboxProps>`
  position: absolute;
  width: 1.8rem;
  height: 1.8rem;
  top: 1;
  left: 1;
  margin: 0;
  padding: 0;
  z-index: -1;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')}
  &:focus {
    outline: 0.2rem solid ${informative50()};
    outline-offset: 0.2rem;
    border-radius: 0.2rem;
  }
`

export const CheckboxGroupWrapper = styled.div<CheckboxGroupProps>`
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};

  div {
    ${(props) => (props.horizontal ? 'margin-right' : 'margin-bottom')}: 2rem;
  }
`
