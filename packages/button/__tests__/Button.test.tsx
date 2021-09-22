import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { ButtonProps } from '../src/'
import Button from '../src/'

describe('accessibility', () => {
  it('is accessible with text', async () => {
    const { container } = render(<Button>text</Button>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('is not accessible without text', async () => {
    const { container } = render(<Button />)
    expect(await axe(container)).not.toHaveNoViolations()
  })
})

describe('no props', () => {
  it('renders button', () => {
    render(<Button />)
    // @ts-ignore
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})

describe('with props.children', () => {
  it('renders text', () => {
    render(<Button>text</Button>)
    // @ts-ignore
    expect(screen.getByRole('button', { name: 'text' })).toBeInTheDocument()
  })

  it('renders span with text', () => {
    render(
      <Button>
        <span>text</span>
      </Button>,
    )
    expect(screen.getByText('text')).toBeInTheDocument()
  })
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<Button aria-label="label" />)
    expect(screen.getByLabelText('label')).toBeInTheDocument()
  })
})

describe('with props.size', () => {
  it.each<ButtonProps['size']>(['small', 'medium', 'large', 'xlarge'])(
    'renders button with size=%j',
    (size) => {
      render(<Button size={size}>{size}</Button>)
      expect(screen.getByText(size!)).toBeInTheDocument()
    },
  )
})

describe('with props.variant', () => {
  it.each<ButtonProps['variant']>(['primary', 'secondary', 'ghost', 'overlay', 'critical'])(
    'renders button with variant=%j',
    (variant) => {
      render(<Button variant={variant}>{variant}</Button>)
      expect(screen.getByText(variant!)).toBeInTheDocument()
    },
  )

  it('does not throw for invalid size', () => {
    render(<Button size={'' as ButtonProps['size']}>text</Button>)
    expect(screen.getByText('text')).toBeInTheDocument()
  })
})

describe('with props.variant', () => {
  it('does not throw for invalid variant', () => {
    render(<Button variant={'' as ButtonProps['variant']}>text</Button>)
    expect(screen.getByText('text')).toBeInTheDocument()
  })

  it.each<ButtonProps['variant']>(['primary', 'secondary'])(
    'renders button with variant=%j',
    (variant) => {
      render(<Button variant={variant}>{variant}</Button>)
      expect(screen.getByText(variant!)).toBeInTheDocument()
    },
  )
})

describe('with props.disabled', () => {
  it('renders disabled button not throw for invalid variant', () => {
    const text = 'text'
    // @ts-ignore
    render(<Button disabled>{text}</Button>)
    expect(screen.getByText(text)).toBeDisabled()
  })

  it.each<ButtonProps['variant']>(['primary', 'secondary'])(
    'renders disabled button with variant=%j',
    (variant) => {
      render(
        // @ts-ignore
        <Button disabled variant={variant}>
          {variant}
        </Button>,
      )
      expect(screen.getByText(variant!)).toBeDisabled()
    },
  )
})
