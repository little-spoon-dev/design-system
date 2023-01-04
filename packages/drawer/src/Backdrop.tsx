import { PropsWithChildren, useEffect, useState } from 'react'

import { BackdropBase } from './BackdropBase'
import { SHOW_HIDE_ANIMATION_DURATION } from './Drawer'

export type BackdropProps = PropsWithChildren<{
  /**
   * Click handler.
   */
  onClick?: () => void

  /**
   * If `true`, the component is shown.
   * @defaultValue `false`
   */
  open?: boolean

  /**
   * Opacity
   * @defaultValue `1`
   */
  opacity?: number
}>

export default function Backdrop({ children, onClick, open = false, opacity = 1 }: BackdropProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const handleClick = () => {
    if (!onClick) {
      return
    }
    onClick()
    setTimeout(() => {
      setIsOpen(false)
    }, SHOW_HIDE_ANIMATION_DURATION)
  }

  if (!isOpen) {
    return null
  }

  return (
    <BackdropBase opacity={opacity} aria-hidden data-testid="backdrop" onClick={handleClick}>
      {children}
    </BackdropBase>
  )
}
