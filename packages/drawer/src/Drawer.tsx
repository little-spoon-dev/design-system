import { CloseIcon } from '@littlespoon/icons'
import { shadeBlack, shadeWhite } from '@littlespoon/theme/lib/colors/token'
import type { StyleProps } from '@littlespoon/theme/lib/style'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { FocusOn } from 'react-focus-on'

import Backdrop from './Backdrop'
import {
  DrawerBase,
  DrawerCloseButton,
  DrawerCloseButtonContainer,
  DrawerContent,
} from './DrawerBase'
import Portal from './Portal'

interface Props extends StyleProps {
  /**
   * ARIA label of the component.
   */
  'aria-label'?: string

  /**
   * Close button title.
   * @defaultValue `'Close'`
   */
  closeButtonTitle?: string

  /**
   * If `true`, clicking the Backdrop will not fire the `onClose` callback.
   * @defaultValue `false`
   */
  disableBackdropClick?: boolean

  /**
   * If `true`, pressing the Escape key will not fire the `onClose` callback.
   * @defaultValue `false`
   */
  disableEscapeKeyDown?: boolean

  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: () => void

  /**
   * If `true`, the component is shown.
   * @defaultValue `false`
   */
  open?: boolean

  /**
   * If `true`, the close button will be shown.
   * @defaultValue `false`
   */
  showCloseButton?: boolean
}
export type DrawerProps = PropsWithChildren<Props>

export default function Drawer({
  'aria-label': ariaLabel,
  children,
  closeButtonTitle = 'Close',
  disableBackdropClick = false,
  disableEscapeKeyDown = false,
  onClose,
  open = false,
  showCloseButton = false,
  sx,
}: DrawerProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  if (!isOpen) {
    return null
  }

  const handleClose = () => {
    if (!onClose) {
      return
    }
    setIsOpen(false)
    onClose()
  }

  const onEscapeKey = disableEscapeKeyDown ? undefined : handleClose
  const onBackdropClick = disableBackdropClick ? undefined : handleClose

  return (
    <Portal>
      <FocusOn onEscapeKey={onEscapeKey}>
        <Backdrop onClick={onBackdropClick} open={isOpen} />
        <DrawerBase aria-label={ariaLabel} aria-modal role="dialog" sx={sx}>
          {showCloseButton && (
            <DrawerCloseButtonContainer>
              <DrawerCloseButton
                aria-label={closeButtonTitle}
                onClick={handleClose}
                title={closeButtonTitle}
              >
                <CloseIcon aria-hidden fill={shadeBlack} stroke={shadeWhite} />
              </DrawerCloseButton>
            </DrawerCloseButtonContainer>
          )}
          <DrawerContent tabIndex={-1}>{children}</DrawerContent>
        </DrawerBase>
      </FocusOn>
    </Portal>
  )
}
