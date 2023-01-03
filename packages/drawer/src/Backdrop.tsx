import { PropsWithChildren, useEffect, useState } from 'react'

import { BackdropBase } from './BackdropBase'
import { ANIMATION_DURATION } from './Drawer'

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
   */
  opacity: number
}>

export default function Backdrop({ children, onClick, open = false, opacity }: BackdropProps) {
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
    }, ANIMATION_DURATION)
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
