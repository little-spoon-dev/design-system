import { ReactNode, useEffect, useRef, useState } from 'react'

import { Content, ContentWrapper } from './styled'

interface AccordionDetailsProps {
  children?: ReactNode
  isExpanded?: boolean
  className?: string
}

export function AccordionDetails({
  children,
  isExpanded = false,
  className,
}: AccordionDetailsProps) {
  const resizeObserver = useRef<ResizeObserver>()
  const [innerContentHeight, setInnerContentHeight] = useState<number>(0)
  const contentRef = useRef<HTMLDivElement | null>(null)

  /* istanbul ignore next */
  useEffect(() => {
    if (typeof ResizeObserver !== 'undefined') {
      // create the observer only once
      resizeObserver.current = new ResizeObserver(() => {
        if (contentRef.current) {
          setInnerContentHeight(contentRef.current.scrollHeight)
        }
      })

      if (contentRef.current) {
        resizeObserver.current.observe(contentRef.current)
      }
      return () => {
        resizeObserver.current?.disconnect()
      }
    } else {
      if (contentRef?.current?.scrollHeight) {
        setInnerContentHeight(contentRef?.current?.scrollHeight)
      }
    }
  }, [])

  return (
    <ContentWrapper
      isExpanded={isExpanded}
      className={className}
      expandedHeight={innerContentHeight}
    >
      <Content ref={contentRef}>{children}</Content>
    </ContentWrapper>
  )
}
