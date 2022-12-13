/* istanbul ignore file */
import React, { createContext, PropsWithChildren, useContext, useState } from 'react'

import Alert, { AlertProps } from './Alert'

type AlertContextState = {
  addToast: (params: AlertProps) => void
}

const initialState = {
  addToast: () => null,
}

const AlertContext = createContext<AlertContextState>(initialState)

export function useAlertProvider() {
  return useContext(AlertContext)
}

let newAlertId = 0

type Toast = AlertProps & {
  alertId: number
}

export type AlertProviderProps = PropsWithChildren<{
  /**
   * Maximum count of stacked notifications. Defaults to 3.
   * @defaultValue 3
   */
  maxStack?: number
}>

export function AlertProvider({
  maxStack = 3,
  children,
}: AlertProviderProps): React.ReactElement<AlertProviderProps> {
  const [toasts, setToasts] = useState<Array<Toast>>([])

  const addToast = (params: AlertProps) => {
    setToasts((prev) => {
      const newToast = { alertId: newAlertId++, ...params }
      if (prev.length < maxStack) {
        return prev.concat([newToast])
      } else {
        const newToasts = prev.slice(1)
        newToasts.push(newToast)
        return newToasts
      }
    })
  }

  const removeToast = (removingId: number) => {
    setToasts((prev) => prev.filter(({ alertId }) => alertId !== removingId))
  }

  return (
    <AlertContext.Provider value={{ addToast }}>
      {children}
      {toasts.map(({ alertId, children: alertChildren, onClose, ...remainingProps }, index) => (
        <Alert
          key={alertId}
          stackIndex={index}
          onClose={() => {
            removeToast(alertId)
            onClose?.()
          }}
          {...remainingProps}
        >
          {alertChildren}
        </Alert>
      ))}
    </AlertContext.Provider>
  )
}
