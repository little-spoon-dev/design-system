/* istanbul ignore file */
import React, { createContext, useContext, useState } from 'react'

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

interface Toast extends AlertProps {
  alertId: number
}

export interface AlertProviderProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode
  /**
   * Maximum count of stacked notifications
   */
  maxStack?: number
}
export function AlertProvider({
  maxStack = 3,
  children,
}: AlertProviderProps): React.ReactElement<AlertProviderProps> {
  const [toasts, setToasts] = useState<Array<Toast>>([])

  const addToast = (params: AlertProps) => {
    setToasts((prev) => {
      if (prev.length < maxStack) {
        return prev.concat([{ alertId: newAlertId++, ...params }])
      }
      return prev
    })
  }

  const removeToast = (removingId: number) => {
    setToasts((prev) => prev.filter(({ alertId }) => alertId !== removingId))
  }

  return (
    <AlertContext.Provider value={{ addToast: addToast }}>
      {children}
      {toasts.map(({ alertId, onClose, ...addToast }, index) => (
        <Alert
          key={alertId}
          stackIndex={index}
          onClose={() => {
            removeToast(alertId)
            onClose?.()
          }}
          {...addToast}
        />
      ))}
    </AlertContext.Provider>
  )
}
