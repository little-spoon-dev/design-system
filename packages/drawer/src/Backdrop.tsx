import { PropsWithChildren, useEffect, useState } from 'react'

import { BackdropBase } from './BackdropBase'

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
}>

export default function Backdrop({ children, onClick, open = false }: BackdropProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const handleClick = () => {
    if (!onClick) {
      return
    }
    setIsOpen(false)
    onClick()
  }

  if (!isOpen) {
    return null
  }

  return (
    <BackdropBase aria-hidden data-testid="backdrop" onClick={handleClick}>
      {children}
    </BackdropBase>
  )
}
