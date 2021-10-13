import type React from 'react'

import {
  BreadcrumbActive,
  BreadcrumbItem,
  BreadcrumbsList,
  BreadcrumbsWrapper,
  Separator,
} from './styled'

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The size of the breadcrumbs. Defaults to "small".
   */
  size?: 'small' | 'medium' | 'large'

  children?: React.ReactNode
}

export function Breadcrumbs({
  size = 'small',
  children,
}: BreadcrumbsProps): React.ReactElement<BreadcrumbsProps> {
  return (
    <BreadcrumbsWrapper aria-label="breadcrumb">
      <BreadcrumbsList size={size}>{children}</BreadcrumbsList>
    </BreadcrumbsWrapper>
  )
}

export interface BreadcrumbProps {
  children?: React.ReactNode

  /**
   * Determines if breadcrumb is active. Defaults to false.
   */
  active?: boolean
}

export function Breadcrumb({
  children,
  active = false,
}: BreadcrumbProps): React.ReactElement<BreadcrumbProps> {
  if (active) {
    return <BreadcrumbActive aria-current="page">{children}</BreadcrumbActive>
  }

  return (
    <>
      <BreadcrumbItem>{children}</BreadcrumbItem>
      <Separator aria-hidden="true" role="separator">
        /
      </Separator>
    </>
  )
}

export default { Breadcrumbs, Breadcrumb }
