import Button from '@littlespoon/button'
import Link from '@littlespoon/link'
import breakpoints from '@littlespoon/theme/lib/breakpoints'
import colors from '@littlespoon/theme/lib/colors'
import { p2, p3, p4 } from '@littlespoon/theme/lib/fonts/paragraph'
import { family, weight } from '@littlespoon/theme/lib/fonts/primary'
import { rem } from '@littlespoon/theme/lib/utils'
import styled, { Keyframes, keyframes } from 'styled-components'

import type { AlertProps } from './Alert'
import { AlertTypes, BaseAlertProps } from './Alert'

const fadeinBottom = keyframes`
  from {transform: translateY(${rem(3)}); opacity: 0;}
  to {transform: translateY(0); opacity: 1;}
`

const fadeoutBottom = keyframes`
  from {transform: translateY(0); opacity: 1;}
  to {transform: translateY(${rem(3)}); opacity: 0;}
`

const fadeinTop = keyframes`
  from {top: ${rem(-3)}; opacity: 0;}
  to {top: 0; opacity: 1;}
`

const fadeoutTop = keyframes`
  from {top: 0; opacity: 1;}
  to {top: ${rem(-3)}; opacity: 0;}
`

/* istanbul ignore next */
export const AlertWrapper = styled.div<BaseAlertProps>`
  display: flex;
  position: ${(props) => (props.type === AlertTypes.RELATIVE ? 'relative' : 'fixed')};
  border-radius: ${rem(0.4)};
  border: 0;
  box-sizing: border-box;
  padding: ${rem(0.8)};
  max-width: ${(props) => (props.type === AlertTypes.RELATIVE ? '100%' : rem(80))};
  width: 100%;
  color: ${colors.shadeBlack};
  visibility: visible;
  ${(props) =>
    props.type === AlertTypes.BANNER ? `top: 0` : `bottom: ${rem((props.stackIndex || 0) * 7)}`};
  ${getBackgroundColor}
  animation: ${(props) =>
    props.isOpen ? fadeInAnimation(props.type) : fadeOutAnimation(props.type)} 0.5s forwards;
`

export const AlertMessages = styled.div<Partial<AlertProps>>`
  margin-left: ${rem(1)};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const AlertTitle = styled.span<Partial<AlertProps>>`
  font: ${weight.bold} ${p2.fontSize} ${family};
  line-height: ${p2.lineHeight};

  @media (max-width: ${breakpoints.sm}px) {
    font: ${weight.bold} ${p3.fontSize} ${family};
    line-height: ${p3.lineHeight};
  }
`

export const AlertDescription = styled.span<Partial<AlertProps>>`
  font: ${weight.normal} ${p3.fontSize} ${family};
  line-height: ${p3.lineHeight};
  vertical-align: middle;

  @media (max-width: ${breakpoints.sm}px) {
    font: ${weight.normal} ${p4.fontSize} ${family};
    line-height: ${p4.lineHeight};
  }
`

export const AlertActionLink = styled(Link)<Partial<AlertProps>>`
  line-height: ${p3.lineHeight};
  font: ${weight.bold} ${p3.fontSize} ${family};

  @media (max-width: ${breakpoints.sm}px) {
    line-height: ${p4.lineHeight};
    font: ${weight.bold} ${p4.fontSize} ${family};
  }
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

function fadeInAnimation(type?: string): Keyframes {
  return type === AlertTypes.TOAST ? fadeinBottom : fadeinTop
}

/* istanbul ignore next */
function fadeOutAnimation(type?: string): Keyframes {
  return type === AlertTypes.TOAST ? fadeoutBottom : fadeoutTop
}

/**
 * Gets Alert background color.
 */
function getBackgroundColor(props: BaseAlertProps): string {
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
