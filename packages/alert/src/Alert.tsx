import CheckIcon from '@littlespoon/icons/lib/CheckIcon'
import CloseIcon from '@littlespoon/icons/lib/CloseIcon'
import ExclamationIcon from '@littlespoon/icons/lib/ExclamationIcon'
import InfoIcon from '@littlespoon/icons/lib/InfoIcon'
import colors from '@littlespoon/theme/lib/colors'
import React, { useEffect } from 'react'

import {
  AlertActionLink,
  AlertCloseButton,
  AlertDescription,
  AlertMessages,
  AlertTitle,
  AlertWrapper,
  VisuallyHidden,
} from './AlertBase'

export * from './AlertProvider'

export enum AlertTypes {
  RELATIVE = 'relative',
  TOAST = 'toast',
  BANNER = 'banner',
}

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
   * The variant to use. Defaults to "relative".
   */
  type?: 'relative' | 'toast' | 'banner'

  /**
   * Show / Hide close button
   */
  showCloseButton?: boolean

  /**
   * Show / Hide Alert
   */
  isOpen?: boolean

  /**
   * Show alert duration
   */
  delay?: number

  /**
   * Offset Index
   */
  offsetIndex?: number
}

const icons = {
  success: <CheckIcon stroke={colors.shadeWhite} fill={colors.success50()} />,
  warning: <ExclamationIcon stroke={colors.shadeWhite} fill={colors.warning50()} />,
  critical: <ExclamationIcon stroke={colors.shadeWhite} fill={colors.critical50()} />,
  informative: <InfoIcon stroke={colors.shadeWhite} fill={colors.informative50()} />,
}

export default function Alert({
  actionLinkText,
  actionLinkUrl,
  delay,
  description = '',
  isOpen = true,
  offsetIndex = 0,
  onClose,
  showCloseButton = true,
  title,
  type = AlertTypes.RELATIVE,
  variant = 'success',
  ...other
}: AlertProps): React.ReactElement<AlertProps> {
  const Icon = icons[variant]
  const delayInMiliseconds = delay || 5000

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (type === AlertTypes.TOAST) {
      /* istanbul ignore next */
      timer = setTimeout(() => onClose?.(), delayInMiliseconds)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [type])

  return (
    <AlertWrapper
      role="alert"
      variant={variant}
      type={type}
      isOpen={isOpen}
      offsetIndex={offsetIndex}
      {...other}
    >
      {Icon}
      <AlertMessages>
        {title && <AlertTitle>{title}</AlertTitle>}
        <AlertDescription>{description}</AlertDescription>
        {actionLinkText && actionLinkUrl && (
          <AlertActionLink href={actionLinkUrl} underline="always">
            {actionLinkText}
          </AlertActionLink>
        )}
      </AlertMessages>
      {showCloseButton && (
        <AlertCloseButton data-testid="btnClose" onClick={onClose}>
          <VisuallyHidden>close</VisuallyHidden>
          <CloseIcon fill="transparent" aria-hidden />
        </AlertCloseButton>
      )}
    </AlertWrapper>
  )
}
