import { CloseIcon } from '@littlespoon/icons'
import { shadeBlack, shadeWhite } from '@littlespoon/theme/lib/colors/token'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { FocusOn } from 'react-focus-on'

import Backdrop from './Backdrop'
import { DrawerBase, DrawerCloseButton, DrawerContent } from './DrawerBase'
import Portal from './Portal'

export type DrawerProps = PropsWithChildren<{
  /**
   * Identifier of the element that will be used to label the Drawer.
   */
  ariaLabelledBy?: string

  /**
   * Close button title.
   * @defaultValue `'Close'`
   */
  closeButtonTitle?: string

  /**
   * Close handler.
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
}>

export default function Drawer({
  ariaLabelledBy,
  children,
  closeButtonTitle = 'Close',
  onClose,
  open = false,
  showCloseButton = false,
}: DrawerProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  if (!isOpen) {
    return null
  }

  const handleClose = () => {
    setIsOpen(false)

    if (!onClose) {
      return
    }
    onClose()
  }

  return (
    <Portal>
      <FocusOn onEscapeKey={handleClose}>
        <Backdrop onClick={handleClose} open={isOpen} />
        <DrawerBase
          aria-labelledby={ariaLabelledBy}
          aria-modal
          className={showCloseButton ? 'with-close-button' : ''}
          role="dialog"
        >
          {showCloseButton && (
            <DrawerCloseButton
              aria-label={closeButtonTitle}
              onClick={handleClose}
              title={closeButtonTitle}
            >
              <CloseIcon fill={shadeBlack} stroke={shadeWhite} />
            </DrawerCloseButton>
          )}
          <DrawerContent tabIndex={-1}>{children}</DrawerContent>
        </DrawerBase>
      </FocusOn>
    </Portal>
  )
}
