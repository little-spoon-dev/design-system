import Button from '@littlespoon/button'
import { breakpoints, colors } from '@littlespoon/theme/lib'
import { rem } from '@littlespoon/theme/lib/utils'
import zIndex from '@littlespoon/theme/lib/z-index'
import styled, { css } from 'styled-components'

import { DrawerProps, SHOW_HIDE_ANIMATION_DURATION } from './Drawer'

export const DrawerBase = styled.div<Partial<DrawerProps> & { hiddenMargin: number }>(
  (props) => css`
    background-color: ${colors.token.shadeWhite};
    border: 0;
    border-radius: ${rem(1.2)} ${rem(1.2)} 0 0;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    left: 0;
    margin: 0;
    margin-bottom: ${props.hiddenMargin}px;
    max-height: 80%;
    max-width: none;
    outline: none;
    position: fixed;
    right: 0;
    transition: margin-bottom ${SHOW_HIDE_ANIMATION_DURATION}ms ease-in-out;
    z-index: ${zIndex.drawer};

    ${breakpoints.up(
      breakpoints.md,
      `
        border-radius: 0;
        left: auto;
        margin-bottom: 0;
        margin-right: ${props.hiddenMargin}px;
        max-height: none;
        max-width: ${rem(48)};
        top: 0;
        transition: margin-right ${SHOW_HIDE_ANIMATION_DURATION}ms ease-in-out;
        width: ${rem(48)};  
    `,
    )}
  `,
)

export const DrawerCloseButton = styled(Button)`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  height: ${rem(3.2)};
  justify-content: center;
  padding: 0;
  position: absolute;
  right: ${rem(2)};
  top: ${rem(2)};
  width: ${rem(3.2)};

  &:hover {
    background-color: transparent;
  }

  ${breakpoints.up(
    breakpoints.md,
    `
    right: ${rem(4)};
    top: ${rem(4)};
    `,
  )}
`
