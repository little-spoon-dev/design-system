import { informative50 } from '@littlespoon/theme/lib/colors/alert'
import { grey40 } from '@littlespoon/theme/lib/colors/secondary'
import { shadeBlack } from '@littlespoon/theme/lib/colors/token'
import { family, paragraph, weight } from '@littlespoon/theme/lib/fonts/primary'
import styled, { css } from 'styled-components'

import type { CheckboxGroupProps } from './Checkbox'

export const CheckboxWrapper = styled.div`
  font-family: ${family};
  ${paragraph.p3};
  user-select: none;
`

export const CheckboxLabel = styled.label<{ disabled?: boolean; checked: boolean }>(
  (props) => css`
    display: flex;
    align-items: center;
    cursor: ${props.disabled ? 'default' : 'pointer'};

    color: ${props.disabled ? grey40() : shadeBlack};
    font-weight: ${props.checked ? weight.bold : weight.normal};
    svg {
      margin-right: 1rem;
      path {
        ${props.checked ? 'fill' : 'stroke'}: ${props.disabled ? grey40() : shadeBlack}
      }
    }
  `,
)

export const Input = styled.input(
  (props) => css`
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  margin: 0;
  padding: 0;
  z-index: -1;
  cursor: ${props.disabled ? 'default' : 'pointer'}
  &:focus {
    outline: 0.2rem solid ${informative50()};
    outline-offset: 0.2rem;
    border-radius: 0.2rem;
  }
`,
)

export const CheckboxGroupWrapper = styled.div<CheckboxGroupProps>(
  (props) => css`
    display: flex;
    flex-direction: ${props.horizontal ? 'row' : 'column'};

    ${CheckboxWrapper} {
      ${props.horizontal ? 'margin-right: 2rem' : 'margin-bottom: 1rem'};
    }
  `,
)
