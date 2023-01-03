import { CloseIcon } from '@littlespoon/icons'
import { shadeBlack, shadeWhite } from '@littlespoon/theme/lib/colors/token'
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

export type DrawerProps = PropsWithChildren<{
  /**
   * ARIA label of the component.
   */
  'aria-label'?: string

  /**
   * A space-separated list of CSS classes.
   */
  className?: string

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
}>

export const ANIMATION_DURATION = 300

export default function Drawer({
  'aria-label': ariaLabel,
  children,
  className,
  closeButtonTitle = 'Close',
  disableBackdropClick = false,
  disableEscapeKeyDown = false,
  onClose,
  open = false,
  showCloseButton = false,
}: DrawerProps) {
  const drawerHiddenStateMargin = -1000
  const [isOpen, setIsOpen] = useState(false)
  const [drawerHiddenMargin, setDrawerHiddenMargin] = useState(drawerHiddenStateMargin)
  const [backdropOpacity, setBackdropOpacity] = useState(0)

  const playShowDrawerAnimation = () => {
    // We want to execute it after the rerender
    setTimeout(() => {
      setDrawerHiddenMargin(0)
      setBackdropOpacity(1)
    }, 1)
  }

  const playHideDrawerAnimation = () => {
    // We want to execute it after the rerender
    setTimeout(() => {
      setBackdropOpacity(0)
      setDrawerHiddenMargin(drawerHiddenStateMargin)
    }, 1)
  }

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  useEffect(() => {
    if (isOpen) {
      playShowDrawerAnimation()
    } else {
      playHideDrawerAnimation()
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  const handleClose = () => {
    if (!onClose) {
      return
    }

    playHideDrawerAnimation()
    setTimeout(() => {
      setIsOpen(false)
      onClose()
    }, ANIMATION_DURATION)
  }

  const onEscapeKey = disableEscapeKeyDown ? undefined : handleClose
  const onBackdropClick = disableBackdropClick ? undefined : handleClose

  return (
    <Portal>
      <FocusOn onEscapeKey={onEscapeKey}>
        <Backdrop onClick={onBackdropClick} open={isOpen} opacity={backdropOpacity} />
        <DrawerBase
          hiddenMargin={drawerHiddenMargin}
          aria-label={ariaLabel}
          aria-modal
          className={className}
          role="dialog"
        >
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
