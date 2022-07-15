import type { StyleProps } from '@littlespoon/theme/lib/style'
import { getStyle } from '@littlespoon/theme/lib/style'
import type React from 'react'
import type { StyledComponentProps } from 'styled-components'
import styled from 'styled-components'

export interface BoxProps
  extends StyledComponentProps<'div', object, object, string | number | symbol>,
    StyleProps {
  /**
   * Box content.
   */
  children?: React.ReactNode
}

const BoxBase = styled.div<BoxProps>(getStyle)

/**
 * Box
 */
export default function Box(props: BoxProps): React.ReactElement<BoxProps> {
  return <BoxBase {...props} />
}
