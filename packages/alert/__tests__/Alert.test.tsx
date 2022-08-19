import { render, screen } from '@testing-library/react'

import type { AlertProps } from '../src/'
import Alert from '../src/'

describe('no props', () => {
  it('renders alert', async () => {
    render(<Alert className="alert"></Alert>)
    expect(document.getElementsByClassName('alert')).toHaveLength(1)
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
  it('renders description', () => {
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
        success: 'rgba(0,116,84,1)',
        warning: 'rgba(248,138,37,1)',
        critical: 'rgba(209,39,15,1)',
        informative: 'rgba(39,99,196,1)',
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
  it.each<AlertProps['type']>(['toast', 'banner'])('renders alert with variant', (type) => {
    if (type) {
      render(<Alert description="alert description" type={type} />)
      expect(document.querySelectorAll('span')).toHaveLength(1)
    }
  })
})

describe('with props.dismissable', () => {
  it('renders icons', () => {
    render(<Alert description="alert description" dismissable={true} />)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })
})
