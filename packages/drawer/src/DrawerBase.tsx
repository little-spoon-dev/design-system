import Button from '@littlespoon/button'
import { md, up } from '@littlespoon/theme/lib/breakpoints'
import { shadeWhite } from '@littlespoon/theme/lib/colors/token'
import { getStyle } from '@littlespoon/theme/lib/style'
import { rem } from '@littlespoon/theme/lib/utils'
import zIndex from '@littlespoon/theme/lib/z-index'
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
  gap: ${rem(1.6)};
  left: 0;
  margin: 0;
  max-height: 80%;
  max-width: none;
  outline: none;
  overflow: hidden;
  padding: ${rem(2)};
  position: fixed;
  right: 0;
  z-index: ${zIndex.drawer};

  ${up(
    md,
    `
    border-radius: 0;
    justify-content: flex-end;
    left: auto;
    max-height: none;
    max-width: ${rem(48)};
    padding: ${rem(4)};
    top: 0;
    width: ${rem(48)};
    `,
  )}

  ${getStyle}
`

export const DrawerCloseButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-grow: 1;
  justify-content: flex-end;
`

export const DrawerCloseButton = styled(Button)`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  height: ${rem(3.2)};
  justify-content: center;
  padding: 0;
  width: ${rem(3.2)};

  &:hover {
    background-color: transparent;
  }
`

export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  outline: none;
  overflow: auto;

  ${up(
    md,
    `
    gap: 3.2rem;
    `,
  )}
`
