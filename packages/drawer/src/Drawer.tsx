import { CloseIcon } from '@littlespoon/icons'
import { shadeBlack, shadeWhite } from '@littlespoon/theme/lib/colors/token'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { FocusOn } from 'react-focus-on'

import Backdrop from './Backdrop'
import { DrawerBase, DrawerCloseButton, DrawerContent } from './DrawerBase'
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
   * Test identifier of the component.
   * @defaultValue `'@modal:drawer'`
   */
  'data-test'?: string

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

  /**
   * If 'true', content of the drawer will be strechted to the full height of a drawer
   */
  useFullHeight?: boolean
}>

// Show/Hide animation duration in milliseconds
export const SHOW_HIDE_ANIMATION_DURATION = 300

export default function Drawer({
  'aria-label': ariaLabel,
  children,
  className,
  closeButtonTitle = 'Close',
  'data-test': dataTest = '@modal:drawer',
  disableBackdropClick = false,
  disableEscapeKeyDown = false,
  onClose,
  open = false,
  showCloseButton = false,
  useFullHeight = false,
}: DrawerProps) {
  const initialBackdropOpacity = 0
  const initialDrawerMargin = -1000
  const finalBackdropOpacity = 1
  const finalDrawerMargin = 0

  const [isOpen, setIsOpen] = useState(false)
  const [drawerMargin, setDrawerMargin] = useState(initialDrawerMargin)
  const [backdropOpacity, setBackdropOpacity] = useState(initialBackdropOpacity)

  const playShowDrawerAnimation = () => {
    // We want to execute it after the rerender
    setTimeout(() => {
      setDrawerMargin(finalDrawerMargin)
      setBackdropOpacity(finalBackdropOpacity)
    }, 1)
  }

  const playHideDrawerAnimation = () => {
    // We want to execute it after the rerender
    setTimeout(() => {
      setBackdropOpacity(initialBackdropOpacity)
      setDrawerMargin(initialDrawerMargin)
    }, 1)
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null
    if (isOpen && !open) {
      // If the drawer is already open and we want to close it by updating the `open` prop, then play the hide animation
      playHideDrawerAnimation()
      timeoutId = setTimeout(() => {
        setIsOpen(false)
      }, SHOW_HIDE_ANIMATION_DURATION)
    } else {
      setIsOpen(open)
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
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
    }, SHOW_HIDE_ANIMATION_DURATION)
  }

  const onEscapeKey = disableEscapeKeyDown ? undefined : handleClose
  const onBackdropClick = disableBackdropClick ? undefined : handleClose

  return (
    <Portal>
      <FocusOn onEscapeKey={onEscapeKey}>
        <Backdrop onClick={onBackdropClick} open={isOpen} opacity={backdropOpacity} />
        <DrawerBase
          hiddenMargin={drawerMargin}
          aria-label={ariaLabel}
          aria-modal
          className={className}
          data-test={dataTest}
          role="dialog"
          showCloseButton={showCloseButton}
        >
          <DrawerContent
            tabIndex={-1}
            useFullHeight={useFullHeight}
            data-testid={`${dataTest}:content`}
          >
            {children}
          </DrawerContent>
          {showCloseButton && (
            <DrawerCloseButton
              aria-label={closeButtonTitle}
              data-test="@button:closeDrawer"
              onClick={handleClose}
              title={closeButtonTitle}
            >
              <CloseIcon aria-hidden fill={shadeBlack} stroke={shadeWhite} />
            </DrawerCloseButton>
          )}
        </DrawerBase>
      </FocusOn>
    </Portal>
  )
}
