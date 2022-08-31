import Button from '@littlespoon/button'
import { up, xs } from '@littlespoon/theme/lib/breakpoints'
import { shadeWhite } from '@littlespoon/theme/lib/colors/token'
import { family } from '@littlespoon/theme/lib/fonts/primary'
import { rem } from '@littlespoon/theme/lib/utils'
import styled from 'styled-components'

import { DrawerProps } from './Drawer'

export const DrawerBase = styled.div<Partial<DrawerProps>>`
  align-content: stretch;
  background-color: ${shadeWhite};
  border: 0;
  border-radius: ${rem(1.2)} ${rem(1.2)} 0 0;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  left: 0;
  margin: 0;
  max-height: 80%;
  max-width: none;
  /* TODO: Update this value */
  min-height: ${rem(20)};
  min-width: unset;
  outline: none;
  overflow: hidden;
  padding: ${rem(0.8)} ${rem(2)} ${rem(2)};
  position: fixed;
  right: 0;
  /* TODO: Update z-index value? */
  z-index: 2000;

  ${up(
    xs + 1,
    `
    border-radius: 0;
    left: auto;
    max-height: none;
    max-width: ${rem(48)};
    min-height: unset;
    /* TODO: Update this value */
    min-width: ${rem(20)};
    padding: ${rem(4)};
    top: 0;
    `,
  )}
`

export const DrawerCloseButton = styled(Button)`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  height: ${rem(3.2)};
  justify-content: center;
  padding: 0;
  position: absolute;
  right: ${rem(2.0)};
  top: ${rem(1.6)};
  width: ${rem(3.2)};

  &:hover {
    background-color: transparent;
  }

  ${up(
    xs + 1,
    `
    right: ${rem(4.0)};
    top: ${rem(4.0)};
  `,
  )}
`

export const DrawerContent = styled.div`
  /* TODO: Remove this line? */
  font: ${rem(1.6)} ${family};
  outline: none;
  overflow-x: hidden;
  overflow-y: auto;
`