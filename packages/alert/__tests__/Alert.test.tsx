import colors from '@littlespoon/theme/src/colors'
import { act, fireEvent, render, screen } from '@testing-library/react'

import type { AlertProps } from '../src/'
import Alert from '../src/'

const onCloseMock = jest.fn()

describe('no props', () => {
  it('renders alert with className', async () => {
    render(<Alert className="alert"></Alert>)
    expect(document.getElementsByClassName('alert')).toHaveLength(1)
  })
})

describe('onClose called on close button click', () => {
  it('renders alert with className', async () => {
    render(<Alert onClose={onCloseMock}></Alert>)
    const btnClose = screen.getByTestId('btn__close')
    act(() => {
      fireEvent.click(btnClose)
    })
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})

describe('with props.title', () => {
  it('renders title', () => {
    render(<Alert title="alert title" />)
    expect(screen.getByText('alert title')).toBeInTheDocument()
  })
})

describe('with props.description', () => {
  it('renders description', () => {
    render(<Alert description="alert description" />)
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
          <Alert description="alert description" variant={variant}>
            {variant}
          </Alert>,
        )
        expect(document.querySelectorAll('span')).toHaveLength(1)
        expect(document.querySelectorAll(`[fill="${colorMapping[variant]}"`)).toHaveLength(1)
      }
    },
  )
})

describe('with props.type', () => {
  it.each<AlertProps['type']>(['toast', 'banner'])('renders alert with type', (type) => {
    if (type) {
      render(<Alert description="alert description" type={type} />)
      expect(document.querySelectorAll('span')).toHaveLength(1)
    }
  })
})

describe('with props.onClose', () => {
  const onClose = jest.fn()
  it('renders icons', () => {
    render(<Alert description="alert description" onClose={onClose} />)
    expect(document.querySelector('button')).toBeInTheDocument()
  })
})
