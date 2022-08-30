import { memo, ReactNode, useEffect, useRef, useState } from 'react'

import { Wrapper } from './styled'

export interface AccordionContentProps {
  isExpanded: boolean
  children: ReactNode
  className?: string
}

const AccordionContent = memo((props: AccordionContentProps) => {
  const self = useController()

  return (
    <Wrapper
      isExpanded={props.isExpanded}
      expandedHeight={self.expandedHeight}
      className={props.className}
    >
      <div ref={self.ref}>{props.children}</div>
    </Wrapper>
  )
})

export default AccordionContent

/* istanbul ignore next */
function useController() {
  const [innerContentHeight, setInnerContentHeight] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)
  const expandedHeight = innerContentHeight

  const getScrollHeight = () => {
    const el = ref.current
    return el?.scrollHeight || 0
  }

  // update the height of the Wrapper when the child component updates its height
  useResizeObserver(ref.current, () => setInnerContentHeight(getScrollHeight()))

  return { expandedHeight, ref }
}

/**
 * Invokes callback whenever a resize is observed on the target element
 */
/* istanbul ignore next */
function useResizeObserver(target: Element | null, callback: () => void) {
  const resizeObserver = useRef<ResizeObserver>(null)
  let mounted = true

  useEffect(() => {
    if (!resizeObserver.current && target) {
      // create the observer only once
      // @ts-ignore
      resizeObserver.current = new ResizeObserver(() => {
        if (mounted && typeof callback === 'function') {
          callback()
        }
      })
      resizeObserver.current.observe(target)
    }
    return () => {
      mounted = false
      resizeObserver.current?.disconnect()
    }
  }, [target])
}
