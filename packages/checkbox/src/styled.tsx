import { informative50 } from '@littlespoon/theme/lib/colors/alert'
import { grey40 } from '@littlespoon/theme/lib/colors/secondary'
import { shadeBlack } from '@littlespoon/theme/lib/colors/token'
import { family, paragraph, weight } from '@littlespoon/theme/lib/fonts/primary'
import styled from 'styled-components'

import type { CheckboxGroupProps, CheckboxLabelProps, CheckboxProps } from './Checkbox'

export const CheckboxWrapper = styled.div`
  font-family: ${family};
  user-select: none;
  ${paragraph.p3};
`

export const CheckboxLabel = styled.label<CheckboxLabelProps>`
  align-items: center;
  color: ${(props) => (props.disabled ? grey40() : shadeBlack)};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: flex;
  font-weight: ${(props) => (props.checked ? weight.bold : weight.normal)};

  svg {
    margin-right: 1rem;
    path {
      ${(props) => (props.checked ? 'fill' : 'stroke')}: ${(props) =>
        props.disabled ? grey40() : shadeBlack};
    }
  }
`

export const Input = styled.input<CheckboxProps>`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  height: 1.6rem;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 1.6rem;
  z-index: -1;

  &:focus {
    outline: 0.2rem solid ${informative50()};
    outline-offset: 0.2rem;
    border-radius: 0.2rem;
  }

  // remove focus styles for non-keyboard focus
  :focus:not(:focus-visible) {
    outline: 0;
  }
`

export const CheckboxGroupWrapper = styled.div<CheckboxGroupProps>`
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};

  ${CheckboxWrapper} {
    ${(props) => (props.horizontal ? 'margin-right: 2rem' : 'margin-bottom: 1rem')};
  }
`
