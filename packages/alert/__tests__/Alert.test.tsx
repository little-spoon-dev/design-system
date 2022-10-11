import colors from '@littlespoon/theme/src/colors'
import { act, fireEvent, render, screen } from '@testing-library/react'

import { AlertProps, AlertTypes } from '../src/'
import Alert, { AlertProvider } from '../src/'

const onCloseMock = jest.fn()

describe('no props', () => {
  it('renders alert with className', async () => {
    render(<Alert className="alert" description="test alert"></Alert>)
    expect(document.getElementsByClassName('alert')).toHaveLength(1)
  })
})

describe('onClose called on close button click', () => {
  it('renders alert with className', async () => {
    render(<Alert onClose={onCloseMock} description="test alert"></Alert>)
    const btnClose = screen.getByTestId('btnClose')
    act(() => {
      fireEvent.click(btnClose)
    })
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})

describe('onClose called after 1000ms', () => {
  it('renders alert with className', async () => {
    render(<Alert onClose={onCloseMock} delay={1000} description="test alert"></Alert>)
    setTimeout(() => {
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    }, 1000)
  })
})

describe('with props.title', () => {
  it('renders title', () => {
    render(<Alert title="alert title" description="test alert" onClose={onCloseMock} />)
    expect(screen.getByText('alert title')).toBeInTheDocument()
  })
})

describe('with props.description', () => {
  it('renders description', () => {
    render(<Alert description="alert description" onClose={onCloseMock} />)
    expect(screen.getByText('alert description')).toBeInTheDocument()
  })
})

describe('with props.link', () => {
  it('renders alert with link', () => {
    render(
      <Alert
        description="alert description"
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
          <Alert description="alert description" variant={variant} onClose={onCloseMock}>
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
            description="alert description"
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
    render(<Alert description="alert description" onClose={onClose} />)
    expect(document.querySelector('button')).toBeInTheDocument()
  })
})

describe('with alert provider', () => {
  it('renders toast stack', () => {
    render(<AlertProvider maxStack={2} />)
  })
})
