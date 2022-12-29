import Button from '@littlespoon/button'
import breakpoints, { lg, up } from '@littlespoon/theme/lib/breakpoints'
import colors from '@littlespoon/theme/lib/colors'
import { rem } from '@littlespoon/theme/lib/utils'
import Typography from '@littlespoon/ui/Typography'
import styled, { css, Keyframes, keyframes } from 'styled-components'

import type { AlertProps } from './Alert'
import { AlertTypes, AlertVariant, BaseAlertProps } from './Alert'

const fadeinBottom = keyframes`
  from {transform: translateY(${rem(3)}); opacity: 0;}
  to {transform: translateY(0); opacity: 1;}
`

const fadeoutBottom = keyframes`
  from {transform: translateY(0); opacity: 1;}
  to {transform: translateY(${rem(3)}); opacity: 0;}
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

  ${up(
    lg,
    `
    margin-left: ${rem(1.24)};
    `,
  )}
`

export const AlertDescription = styled(Typography).attrs({
  noMargin: true,
  variant: { 0: 'p4', [breakpoints.lg]: 'p3' },
})(
  () => css`
    vertical-align: middle;
  `,
)

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 2rem;
  svg {
    max-width: 1.6rem;
    max-height: 1.6rem;
  }

  ${up(
    lg,
    `
    max-height: 2.4rem;
    svg {
      max-width: 1.92rem;
      max-height: 1.92rem;
    }
    `,
  )}
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

function fadeInAnimation(type?: string): Keyframes | null {
  return type === AlertTypes.TOAST ? fadeinBottom : null
}

/* istanbul ignore next */
function fadeOutAnimation(type?: string): Keyframes | null {
  return type === AlertTypes.TOAST ? fadeoutBottom : null
}

/**
 * Gets Alert background color.
 */
function getBackgroundColor(props: BaseAlertProps): string {
  let backgroundColor = colors.success20()

  switch (props.variant) {
    case AlertVariant.SUCCESS:
      backgroundColor = colors.success20()
      break

    case AlertVariant.WARNING:
      backgroundColor = colors.warning20()
      break

    case AlertVariant.CRITICAL:
      backgroundColor = colors.critical20()
      break

    case AlertVariant.INFORMATIVE:
      backgroundColor = colors.informative20()
      break
  }

  return `background-color: ${backgroundColor};`
}
