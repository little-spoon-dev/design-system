import '@testing-library/jest-dom'

import colors from '@littlespoon/theme/src/colors'
import { act, fireEvent, render, screen } from '@testing-library/react'

import Alert, { AlertProps, AlertProvider, AlertTypes, AlertVariant } from '../src/'

const onCloseMock = jest.fn()
const alertDescription = 'test alert'

describe('no props', () => {
  it('renders alert with className', () => {
    render(<Alert className="alert">{alertDescription}</Alert>)
    expect(document.getElementsByClassName('alert')).toHaveLength(1)
  })
})

describe('onClose called on close button click', () => {
  it('renders alert', () => {
    render(<Alert onClose={onCloseMock}>{alertDescription}</Alert>)
    const btnClose = screen.getByTestId('btnClose')
    act(() => {
      fireEvent.click(btnClose)
    })
    expect(onCloseMock).toHaveBeenCalledTimes(1)
    expect(document.getElementsByClassName('alert')).toHaveLength(0)
  })
})

describe('alert closes when onClose handler is not provided', () => {
  it('renders alert', () => {
    render(<Alert showCloseButton>{alertDescription}</Alert>)
    const btnClose = screen.getByTestId('btnClose')
    act(() => {
      fireEvent.click(btnClose)
    })
    expect(document.getElementsByClassName('alert')).toHaveLength(0)
  })
})

describe('onClose called after 1000ms', () => {
  it('renders alert', () => {
    render(
      <Alert onClose={onCloseMock} delay={1000}>
        {alertDescription}
      </Alert>,
    )
    setTimeout(() => {
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    }, 1000)
  })
})

describe('with props.title', () => {
  it('renders title', () => {
    render(<Alert title="alert title">{alertDescription}</Alert>)
    expect(screen.getByText('alert title')).toBeInTheDocument()
  })
})

describe('with props.children', () => {
  it('renders children', () => {
    render(<Alert>{alertDescription}</Alert>)
    expect(screen.getByText(alertDescription)).toBeInTheDocument()
  })
})

describe('with props.variant', () => {
  it.each<AlertProps['variant']>([
    AlertVariant.CRITICAL,
    AlertVariant.INFORMATIVE,
    AlertVariant.SUCCESS,
    AlertVariant.WARNING,
  ])('renders alert with variant', (variant) => {
    const colorMapping = {
      [AlertVariant.SUCCESS]: colors.success50(),
      [AlertVariant.WARNING]: colors.warning50(),
      [AlertVariant.CRITICAL]: colors.critical50(),
      [AlertVariant.INFORMATIVE]: colors.informative50(),
    }
    if (variant) {
      render(
        <Alert variant={variant}>
          {alertDescription} {variant}
        </Alert>,
      )
      expect(document.querySelectorAll(`[fill="${colorMapping[variant]}"`)).toHaveLength(1)
    }
  })
})

describe('with props.type', () => {
  it.each<AlertProps['type']>([AlertTypes.TOAST, AlertTypes.BANNER, AlertTypes.RELATIVE])(
    'renders alert with type',
    (type) => {
      if (type) {
        render(
          <Alert type={type} showCloseButton={false} isOpen onClose={onCloseMock} stackIndex={0}>
            {alertDescription}
          </Alert>,
        )
        expect(document.querySelectorAll('p')).toHaveLength(1)
      }
    },
  )
})

describe('with props.onClose', () => {
  it('renders close button', () => {
    render(<Alert onClose={onCloseMock}>{alertDescription}</Alert>)
    expect(document.querySelector('button')).toBeInTheDocument()
  })
})

describe('with props.closeButtonTitle', () => {
  it('renders close button', () => {
    const closeButtonTitle = 'Hello'
    render(
      <Alert closeButtonTitle={closeButtonTitle} showCloseButton>
        {alertDescription}
      </Alert>,
    )
    expect(screen.getByLabelText(closeButtonTitle)).toBeInTheDocument()
  })
})

describe('with alert provider', () => {
  it('renders toast stack', () => {
    render(<AlertProvider maxStack={2} />)
  })
})
