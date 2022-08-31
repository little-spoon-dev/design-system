import { ReactElement, ReactNode, ReactPortal, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export type PortalContainerFunction = () => HTMLElement | null

export interface PortalProps {
  /**
   * The content of the component.
   */
  children: ReactNode

  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   * By default, it uses the body of the top-level document object, so it's simply `document.body` most of the time.
   * @defaultValue `document.body`
   */
  container?: HTMLElement | PortalContainerFunction
}

function getContainerElement(
  container?: HTMLElement | PortalContainerFunction,
): HTMLElement | null {
  if (!container) {
    return null
  }
  return typeof container === 'function' ? container() : container
}

/**
 * Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
 * @see https://reactjs.org/docs/portals.html
 * @param props - Properties
 */
export default function Portal({
  children,
  container,
}: PortalProps): ReactPortal | ReactElement | null {
  const [containerElement, setContainerElement] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    setContainerElement(getContainerElement(container) || document.body)
  }, [container])

  if (!containerElement) {
    return null
  }
  return createPortal(children, containerElement)
}
