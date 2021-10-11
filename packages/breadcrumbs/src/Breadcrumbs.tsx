import type React from 'react'

import { BreadcrumbsWrapper, Crumb, CurrentPage, Separator } from './styled'

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Component type to render Breadcrumbs as
   */
  as?: React.ElementType

  /**
   * Array of objects of route hrefs, product type name or product name
   */
  routes: {
    href?: string
    name: string
  }[]

  /**
   * The size of the component. Defaults to "medium".
   */
  size?: 'small' | 'medium' | 'large'

  children?: React.ReactNode
}

export function Breadcrumbs({
  size = 'medium',
  routes,
  as,
}: BreadcrumbsProps): React.ReactElement<BreadcrumbProps<React.ElementType>> {
  return (
    <BreadcrumbsWrapper>
      {routes.map((route, index) =>
        route.href ? (
          <>
            <Breadcrumb as={as} href={route.href} name={route.name} key={index} size={size} />
            <Separator role="separator" key={'separator' + index} size={size}>
              /
            </Separator>
          </>
        ) : (
          <CurrentPage key={index} size={size}>
            {route.name}
          </CurrentPage>
        ),
      )}
    </BreadcrumbsWrapper>
  )
}

export interface Props<C extends React.ElementType> {
  /**
   * Component type to render
   */
  as?: C

  /**
   * Breadcrumb route href
   */
  href?: string

  /**
   * Breadcrumb route name
   */
  name?: string

  /**
   * The size of the component. Defaults to "medium".
   */
  size?: 'small' | 'medium' | 'large'

  children?: React.ReactNode
}

export type BreadcrumbProps<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>

export const Breadcrumb = <C extends React.ElementType = 'a'>({
  name,
  size = 'medium',
  ...other
}: BreadcrumbProps<C>): React.ReactElement<BreadcrumbProps<C>> => {
  ;(other as unknown as BreadcrumbProps<'a'>).as = other.as || 'a'
  if (other.as === 'a' && !other.type) {
    ;(other as unknown as BreadcrumbProps<'a'>).type = other.as
  }
  return (
    <Crumb {...other} size={size}>
      {name}
    </Crumb>
  )
}

export default { Breadcrumbs, Breadcrumb }
