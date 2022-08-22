import CheckIcon from '@littlespoon/icons/lib/CheckIcon'
import CloseIcon from '@littlespoon/icons/lib/CloseIcon'
import ExclamationIcon from '@littlespoon/icons/lib/ExclamationIcon'
import colors from '@littlespoon/theme/lib/colors'
import type React from 'react'

import {
  AlertActionLink,
  AlertCloseButton,
  AlertDescription,
  AlertMessages,
  AlertTitle,
  AlertWrapper,
  VisuallyHidden,
} from './AlertBase'

export interface AlertProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The title of the component.
   */
  title?: string

  /**
   * The description of the component.
   */
  description?: string

  /**
   * The action link of the component.
   */
  actionLinkUrl?: string

  /**
   * The action link text of the component.
   */
  actionLinkText?: string

  /**
   * Callback when close button is clicked.
   */
  onClose?: () => void

  /**
   * The variant to use. Defaults to "success".
   */
  variant?: 'success' | 'warning' | 'critical' | 'informative'

  /**
   * The variant to use. Defaults to "toast".
   */
  type?: 'toast' | 'banner'
}

const iconFills = {
  success: colors.success50(),
  warning: colors.warning50(),
  critical: colors.critical50(),
  informative: colors.informative50(),
}

export default function Alert({
  actionLinkText,
  actionLinkUrl,
  description = '',
  onClose,
  title,
  type = 'banner',
  variant = 'success',
  ...other
}: AlertProps): React.ReactElement<AlertProps> {
  const Icon = variant === 'success' ? CheckIcon : ExclamationIcon
  return (
    <AlertWrapper variant={variant} type={type} {...other}>
      <Icon stroke={colors.shadeWhite} fill={iconFills[variant]} />
      <AlertMessages>
        {title && <AlertTitle>{title}</AlertTitle>}
        <AlertDescription>{description}</AlertDescription>
        {actionLinkText && actionLinkUrl && (
          <AlertActionLink href={actionLinkUrl} underline="always">
            {actionLinkText}
          </AlertActionLink>
        )}
      </AlertMessages>
      {onClose && (
        <AlertCloseButton onClick={onClose}>
          <VisuallyHidden>close</VisuallyHidden>
          <CloseIcon fill="transparent" aria-hidden />
        </AlertCloseButton>
      )}
    </AlertWrapper>
  )
}
