import CheckIcon from '@littlespoon/icons/lib/CheckIcon'
import CloseIcon from '@littlespoon/icons/lib/CloseIcon'
import ExclamationIcon from '@littlespoon/icons/lib/ExclamationIcon'
import InfoIcon from '@littlespoon/icons/lib/InfoIcon'
import colors from '@littlespoon/theme/lib/colors'
import React, { useEffect, useState } from 'react'

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
   * The variant to use. Defaults to "relative".
   */
  type?: 'relative' | 'toast' | 'banner'
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
  description = '',
  onClose,
  title,
  type = 'relative',
  variant = 'success',
  ...other
}: AlertProps): React.ReactElement<AlertProps> {
  const [show, setShow] = useState(true)
  const Icon = icons[variant]

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (type === 'toast') {
      timer = setTimeout(hideAlert, 5 * 1000)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [type])

  /* istanbul ignore next */
  const hideAlert = () => {
    setShow(false)
    onClose?.()
  }

  return (
    <AlertWrapper
      role="alert"
      variant={variant}
      type={type}
      className={show ? 'show' : 'hide'}
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
      {onClose && (
        <AlertCloseButton data-testid="btn__close" onClick={hideAlert}>
          <VisuallyHidden>close</VisuallyHidden>
          <CloseIcon fill="transparent" aria-hidden />
        </AlertCloseButton>
      )}
    </AlertWrapper>
  )
}
