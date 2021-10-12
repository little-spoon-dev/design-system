import type React from 'react'

import { ActiveBreadcrumb, BreadcrumbsList, BreadcrumbsWrapper, Crumb, Separator } from './styled'

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The size of the breadcrumbs. Defaults to "small".
   */
  size?: 'small' | 'medium' | 'large'

  children?: React.ReactNode
}

export const Breadcrumbs = ({
  size = 'small',
  children,
}: BreadcrumbsProps): React.ReactElement<BreadcrumbsProps> => {
  return (
    <BreadcrumbsWrapper aria-label="breadcrumbs">
      <BreadcrumbsList size={size}>{children}</BreadcrumbsList>
    </BreadcrumbsWrapper>
  )
}

export interface BreadcrumbProps {
  children?: React.ReactNode

  /**
   * Determines if breadcrumb is active page
   */
  active?: boolean
}

export const Breadcrumb = ({
  children,
  active = false,
}: BreadcrumbProps): React.ReactElement<BreadcrumbProps> =>
  active ? (
    <ActiveBreadcrumb aria-current="page">{children}</ActiveBreadcrumb>
  ) : (
    <>
      <Crumb>{children}</Crumb>
      <Separator aria-hidden="true" role="separator">
        /
      </Separator>
    </>
  )

export default { Breadcrumbs, Breadcrumb }
