import colors from '@littlespoon/theme/src/colors'
import { act, fireEvent, render, screen } from '@testing-library/react'

import Alert, { AlertProps, AlertProvider, AlertTypes } from '../src/'

const onCloseMock = jest.fn()
const alertDescription = 'test alert'

describe('no props', () => {
  it('renders alert with className', () => {
    render(<Alert className="alert" description={alertDescription}></Alert>)
    expect(document.getElementsByClassName('alert')).toHaveLength(1)
  })
})

describe('onClose called on close button click', () => {
  it('renders alert with className', () => {
    render(<Alert onClose={onCloseMock} description={alertDescription}></Alert>)
    const btnClose = screen.getByTestId('btnClose')
    act(() => {
      fireEvent.click(btnClose)
    })
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})

describe('onClose called after 1000ms', () => {
  it('renders alert with className', () => {
    render(<Alert onClose={onCloseMock} delay={1000} description={alertDescription}></Alert>)
    setTimeout(() => {
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    }, 1000)
  })
})

describe('with props.title', () => {
  it('renders title', () => {
    render(<Alert title="alert title" description={alertDescription} onClose={onCloseMock} />)
    expect(screen.getByText('alert title')).toBeInTheDocument()
  })
})

describe('with props.description', () => {
  it('renders description', () => {
    render(<Alert description={alertDescription} onClose={onCloseMock} />)
    expect(screen.getByText(alertDescription)).toBeInTheDocument()
  })
})

describe('with props.link', () => {
  it('renders alert with link', () => {
    render(
      <Alert
        description={alertDescription}
        actionLinkText="Action Link"
        actionLinkUrl="https://littlespoon.com"
        onClose={onCloseMock}
      />,
    )
    expect(document.querySelector('a')).toBeInTheDocument()
  })
})

describe('with props.variant', () => {
  it.each<AlertProps['variant']>(['success', 'critical', 'informative', 'warning'])(
    'renders alert with variant',
    (variant) => {
      const colorMapping = {
        success: colors.success50(),
        warning: colors.warning50(),
        critical: colors.critical50(),
        informative: colors.informative50(),
      }
      if (variant) {
        render(
          <Alert description={alertDescription} variant={variant} onClose={onCloseMock}>
            {variant}
          </Alert>,
        )
        expect(document.querySelectorAll(`[fill="${colorMapping[variant]}"`)).toHaveLength(1)
      }
    },
  )
})

describe('with props.type', () => {
  it.each<AlertProps['type']>([AlertTypes.TOAST, AlertTypes.BANNER, AlertTypes.RELATIVE])(
    'renders alert with type',
    (type) => {
      if (type) {
        render(
          <Alert
            description={alertDescription}
            type={type}
            showCloseButton={false}
            isOpen={true}
            onClose={onCloseMock}
            stackIndex={0}
          />,
        )
        expect(document.querySelectorAll('span')).toHaveLength(1)
      }
    },
  )
})

describe('with props.onClose', () => {
  const onClose = jest.fn()
  it('renders icons', () => {
    render(<Alert description={alertDescription} onClose={onClose} />)
    expect(document.querySelector('button')).toBeInTheDocument()
  })
})

describe('with alert provider', () => {
  it('renders toast stack', () => {
    render(<AlertProvider maxStack={2} />)
  })
})
