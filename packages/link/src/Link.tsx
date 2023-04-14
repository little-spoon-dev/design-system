import type React from 'react'

import { LinkBase, LinkDisabled } from './LinkBase'

export enum LinkUnderline {
  ALWAYS = 'always',
  HOVER = 'hover',
  NONE = 'none',
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Component content.
   */
  children?: React.ReactNode

  /**
   * Controls whether the link is disabled: Defaults to false.
   * @defaultValue false
   */
  disabled?: boolean

  /**
   * Controls when the link should have an underline. Defaults to "always".
   */
  underline?: LinkUnderline
}

/**
 * Link
 */
export default function Link({
  disabled = false,
  underline = LinkUnderline.ALWAYS,
  ...other
}: LinkProps): React.ReactElement<LinkProps> {
  if (disabled) {
    return (
      <LinkDisabled aria-disabled={disabled} disabled={disabled} underline={underline} {...other} />
    )
  }

  if (other.target === '_blank') {
    other.rel = other.rel || 'noopener noreferrer'
  }
  return <LinkBase underline={underline} {...other} />
}
