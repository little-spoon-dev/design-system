import Button from '@littlespoon/button'
import Link from '@littlespoon/link'
import colors from '@littlespoon/theme/lib/colors'
import { p3, p4 } from '@littlespoon/theme/lib/fonts/paragraph'
import { family, weight } from '@littlespoon/theme/lib/fonts/primary'
import { rem } from '@littlespoon/theme/lib/utils'
import styled from 'styled-components'

import type { AlertProps } from './Alert'

export const AlertWrapper = styled.div<Partial<AlertProps>>`
  display: flex;
  position: absolute;
  border-radius: 2px;
  border: 0;
  box-sizing: border-box;
  padding: 10px;
  max-width: 800px;
  width: 100%;
  color: ${colors.shadeBlack};
  ${(props) => (props.type === 'banner' ? `top: 0px` : 'bottom: 0px')};
  ${getBackgroundColor}
`

export const AlertMessages = styled.div<Partial<AlertProps>>`
  margin-left: ${rem(0.8)};
  display: flex;
  flex-direction: column;
`

export const AlertTitle = styled.span<Partial<AlertProps>>`
  font: ${weight.bold} ${p3.fontSize} ${family};
  line-height: ${p3.lineHeight};
`

export const AlertDescription = styled.span<Partial<AlertProps>>`
  font: ${weight.normal} ${p4.fontSize} ${family};
  line-height: ${p4.lineHeight};
`

export const AlertActionLink = styled(Link)<Partial<AlertProps>>`
  line-height: ${p4.lineHeight};
  font: ${weight.bold} ${p4.fontSize} ${family};
`

export const VisuallyHidden = styled.span`
  clip: rect(0 0 0 0);
  position: absolute;
`

export const AlertCloseButton = styled(Button)`
  background-color: transparent;
  padding: 0;
  border: none;
  height: fit-content;
  position: absolute;
  right: ${rem(0.8)};
  top: ${rem(0.8)};
  &:hover {
    background-color: transparent;
  }
`

/**
 * Gets Alert background color.
 */
function getBackgroundColor(props: AlertProps): string {
  let backgroundColor = colors.success20()

  switch (props.variant) {
    case 'success':
      backgroundColor = colors.success20()
      break

    case 'warning':
      backgroundColor = colors.warning20()
      break

    case 'critical':
      backgroundColor = colors.critical20()
      break

    case 'informative':
      backgroundColor = colors.informative20()
      break
  }

  return `background-color: ${backgroundColor};`
}
