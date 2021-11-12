import type React from 'react'

import { LinkBase } from './LinkBase'

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Component content.
   */
  children?: React.ReactNode

  /**
   * Controls when the link should have an underline. Defaults to "always".
   */
  underline?: 'always' | 'hover' | 'none'
}

/**
 * Link
 */
export default function Link({
  underline = 'always',
  ...other
}: LinkProps): React.ReactElement<LinkProps> {
  if (other.target === '_blank') {
    other.rel = other.rel || 'noopener noreferrer'
  }
  return <LinkBase underline={underline} {...other} />
}
