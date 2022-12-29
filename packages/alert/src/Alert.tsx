import { CheckIcon, CloseIcon, ExclamationIcon, InfoIcon } from '@littlespoon/icons'
import breakpoints from '@littlespoon/theme/lib/breakpoints'
import colors from '@littlespoon/theme/lib/colors'
import Typography from '@littlespoon/typography'
import React, { PropsWithChildren, useEffect, useState } from 'react'

import {
  AlertCloseButton,
  AlertDescription,
  AlertMessages,
  AlertWrapper,
  IconWrapper,
} from './AlertBase'

export * from './AlertProvider'

export enum AlertTypes {
  RELATIVE = 'relative',
  TOAST = 'toast',
  BANNER = 'banner',
}

export enum AlertVariant {
  CRITICAL = 'critical',
  INFORMATIVE = 'informative',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export type BaseAlertProps = PropsWithChildren<{
  /**
   * The title of the component.
   */
  title?: string

  /**
   * The variant to use. Defaults to 'success'.
   * @defaultValue 'success'
   */
  variant?: AlertVariant

  /**
   * The variant to use. Defaults to 'relative'.
   * @defaultValue 'relative'
   */
  type?: AlertTypes

  /**
   * Show / Hide close button. Defaults to true.
   * @defaultValue true
   */
  showCloseButton?: boolean

  /**
   * Close button title. Defaults to 'Close'.
   * @defaultValue 'Close'
   */
  closeButtonTitle?: string

  /**
   * Show / Hide Alert. Defaults to true.
   * @defaultValue true
   */
  isOpen?: boolean

  /**
   * Show alert delay (in milliseconds). Defaults to 6000.
   * @defaultValue 6000
   */
  delay?: number

  /**
   * Stack index. Defaults to 0.
   * @defaultValue 0
   */
  stackIndex?: number
}>

type TypeProps =
  | {
      type: AlertTypes.TOAST
      delay?: number
      showCloseButton: boolean
      onClose: () => void
    }
  | {
      type: AlertTypes.RELATIVE | AlertTypes.BANNER
      showCloseButton: boolean
      onClose?: () => void
    }
  | {
      type?: AlertTypes.RELATIVE | AlertTypes.BANNER
      onClose?: () => void
    }

export type AlertProps = BaseAlertProps & TypeProps & React.HTMLAttributes<HTMLElement>

const icons = {
  [AlertVariant.SUCCESS]: (
    <CheckIcon aria-hidden stroke={colors.shadeWhite} fill={colors.success50()} />
  ),
  [AlertVariant.WARNING]: (
    <ExclamationIcon aria-hidden stroke={colors.shadeWhite} fill={colors.warning50()} />
  ),
  [AlertVariant.CRITICAL]: (
    <ExclamationIcon aria-hidden stroke={colors.shadeWhite} fill={colors.critical50()} />
  ),
  [AlertVariant.INFORMATIVE]: (
    <InfoIcon aria-hidden stroke={colors.shadeWhite} fill={colors.informative50()} />
  ),
}

export default function Alert({
  children,
  closeButtonTitle = 'Close',
  delay = 6000,
  isOpen = true,
  stackIndex = 0,
  onClose,
  showCloseButton = true,
  title,
  type = AlertTypes.RELATIVE,
  variant = AlertVariant.SUCCESS,
  ...other
}: AlertProps): React.ReactElement<AlertProps> | null {
  const [isAlertOpen, setIsAlertOpen] = useState(isOpen)
  const Icon = icons[variant]

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (type === AlertTypes.TOAST) {
      /* istanbul ignore next */
      timer = setTimeout(() => onClose?.(), delay)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [type])

  const handleClose = () => {
    setIsAlertOpen(false)
    onClose?.()
  }

  if (!isAlertOpen) {
    return null
  }

  return (
    <AlertWrapper
      role="alert"
      variant={variant}
      type={type}
      isOpen={isAlertOpen}
      stackIndex={stackIndex}
      data-testid="alertWrapper"
      {...other}
    >
      <IconWrapper>{Icon}</IconWrapper>
      <AlertMessages>
        {title && (
          <Typography bold noMargin variant={{ 0: 'p3', [breakpoints.lg]: 'p2' }}>
            {title}
          </Typography>
        )}
        <AlertDescription>{children}</AlertDescription>
      </AlertMessages>
      {showCloseButton && (
        <AlertCloseButton
          aria-label={closeButtonTitle}
          data-testid="btnClose"
          onClick={handleClose}
          title={closeButtonTitle}
        >
          <CloseIcon aria-hidden fill="transparent" stroke={colors.shadeBlack} />
        </AlertCloseButton>
      )}
    </AlertWrapper>
  )
}
