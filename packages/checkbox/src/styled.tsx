import { informative50 } from '@littlespoon/theme/lib/colors/alert'
import { grey40 } from '@littlespoon/theme/lib/colors/secondary'
import { shadeBlack } from '@littlespoon/theme/lib/colors/token'
import { family, paragraph, weight } from '@littlespoon/theme/lib/fonts/primary'
import styled from 'styled-components'

import type { CheckboxGroupProps, CheckboxProps } from './Checkbox'

export const CheckboxItem = styled.div<CheckboxProps & { checked: boolean }>`
  display: flex;
  align-items: center;
  font-family: ${family};
  ${paragraph.p3};
  user-select: none;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  color: ${(props) => (props.disabled ? grey40() : shadeBlack)};
  font-weight: ${(props) => (props.checked ? weight.bold : weight.normal)};

  &:focus-visible {
    outline: 0.2rem solid ${informative50()};
    outline-offset: 0.2rem;
    border-radius: 0.2rem;
  }

  svg {
    margin-right: 1rem;
    path {
      ${(props) => (props.checked ? 'fill' : 'stroke')}: ${(props) =>
        props.disabled ? grey40() : shadeBlack}
    }
  }
`

export const CheckboxGroupWrapper = styled.div<CheckboxGroupProps>`
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};

  div {
    ${(props) => (props.horizontal ? 'margin-right' : 'margin-bottom')}: 2rem;
  }
`
