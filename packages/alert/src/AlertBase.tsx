import Button from '@littlespoon/button'
import Link from '@littlespoon/link'
import colors from '@littlespoon/theme/lib/colors'
import { p3, p4 } from '@littlespoon/theme/lib/fonts/paragraph'
import { family, weight } from '@littlespoon/theme/lib/fonts/primary'
import { rem } from '@littlespoon/theme/lib/utils'
import styled, { Keyframes, keyframes } from 'styled-components'

import type { AlertProps } from './Alert'

const fadeinBottom = keyframes`
  from {bottom: -30px; opacity: 0;}
  to {bottom: 0; opacity: 1;}
`

const fadeoutBottom = keyframes`
  from {bottom: 0; opacity: 1;}
  to {bottom: -30px; opacity: 0;}
`

const fadeinTop = keyframes`
  from {top: -30px; opacity: 0;}
  to {top: 0; opacity: 1;}
`

const fadeoutTop = keyframes`
  from {top: 0; opacity: 1;}
  to {top: -30px; opacity: 0;}
`

export const AlertWrapper = styled.div<Partial<AlertProps>>`
  display: flex;
  position: ${(props) => (props.type === 'relative' ? 'relative' : 'absolute')};
  border-radius: ${rem(0.2)};
  border: 0;
  box-sizing: border-box;
  padding: ${rem(0.8)};
  max-width: ${(props) => (props.type === 'relative' ? '100%' : rem(80))};
  width: 100%;
  color: ${colors.shadeBlack};
  ${(props) => (props.type === 'banner' ? `top: 0px` : 'bottom: 0px')};
  ${getBackgroundColor}
  &.show {
    visibility: visible; /* Show the toast */
    animation: ${fadeInAnimation} 0.5s forwards;
  }
  &.hide {
    visibility: visible; /* Show the toast */
    animation: ${fadeOutAnimation} 0.5s forwards;
  }
`

export const AlertMessages = styled.div<Partial<AlertProps>>`
  margin-left: ${rem(0.8)};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const AlertTitle = styled.span<Partial<AlertProps>>`
  font: ${weight.bold} ${p3.fontSize} ${family};
  line-height: ${p3.lineHeight};
`

export const AlertDescription = styled.span<Partial<AlertProps>>`
  font: ${weight.normal} ${p4.fontSize} ${family};
  line-height: ${p4.lineHeight};
  vertical-align: middle;
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

function fadeInAnimation(props: AlertProps): Keyframes {
  return props.type === 'toast' ? fadeinBottom : fadeinTop
}

function fadeOutAnimation(props: AlertProps): Keyframes {
  return props.type === 'toast' ? fadeoutBottom : fadeoutTop
}

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
