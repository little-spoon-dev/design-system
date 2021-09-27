import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { ButtonProps } from '../src/'
import Button from '../src/'

const children = 'children'

describe('accessibility', () => {
  describe('button', () => {
    it('is accessible with text', async () => {
      const { container } = render(<Button>{children}</Button>)
      expect(await axe(container)).toHaveNoViolations()
    })

    it('is not accessible without text', async () => {
      const { container } = render(<Button />)
      expect(await axe(container)).not.toHaveNoViolations()
    })
  })

  describe('link', () => {
    it('is accessible with text and href', async () => {
      const { container } = render(
        <Button as="a" href="#">
          {children}
        </Button>,
      )
      expect(await axe(container)).toHaveNoViolations()
    })

    it('is not accessible without text and href', async () => {
      const { container } = render(<Button as="a" href="" />)
      expect(await axe(container)).not.toHaveNoViolations()
    })
  })
})

describe('no props', () => {
  it('renders button', () => {
    render(<Button />)
    // @ts-ignore
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })
})

describe('with props.children', () => {
  it('renders text', () => {
    render(<Button>{children}</Button>)
    // @ts-ignore
    expect(screen.getByRole('button', { name: children })).toBeInTheDocument()
  })

  it('renders span with text', () => {
    render(
      <Button>
        <span>{children}</span>
      </Button>,
    )
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<Button aria-label="label" />)
    expect(screen.getByLabelText('label')).toBeInTheDocument()
  })
})

describe('with props.size', () => {
  it.each<ButtonProps<'button'>['size']>(['small', 'medium', 'large', 'xlarge'])(
    'renders button with size=%j',
    (size) => {
      render(<Button size={size}>{size}</Button>)
      expect(screen.getByText(size!)).toBeInTheDocument()
    },
  )
})

describe('with props.variant', () => {
  it.each<ButtonProps<'button'>['variant']>([
    'primary',
    'secondary',
    'ghost',
    'overlay',
    'critical',
  ])('renders button with variant=%j', (variant) => {
    render(<Button variant={variant}>{variant}</Button>)
    expect(screen.getByText(variant!)).toBeInTheDocument()
  })

  it('does not throw for invalid size', () => {
    render(<Button size={'' as ButtonProps<'button'>['size']}>{children}</Button>)
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})

describe('with props.variant', () => {
  it('does not throw for invalid variant', () => {
    render(<Button variant={'' as ButtonProps<'button'>['variant']}>{children}</Button>)
    expect(screen.getByText(children)).toBeInTheDocument()
  })

  it.each<ButtonProps<'button'>['variant']>(['primary', 'secondary'])(
    'renders button with variant=%j',
    (variant) => {
      render(<Button variant={variant}>{variant}</Button>)
      expect(screen.getByText(variant!)).toBeInTheDocument()
    },
  )
})

describe('with props.disabled', () => {
  it('renders disabled button not throw for invalid variant', () => {
    // @ts-ignore
    render(<Button disabled>{children}</Button>)
    expect(screen.getByText(children)).toBeDisabled()
  })

  it.each<ButtonProps<'button'>['variant']>(['primary', 'secondary'])(
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

describe('with props.as', () => {
  it('renders link', () => {
    const href = 'https://example.com/'
    render(
      <Button as="a" href={href}>
        {children}
      </Button>,
    )
    // @ts-ignore
    expect(screen.getByRole('link', { name: children })).toHaveAttribute('href', href)
  })

  it('renders component', () => {
    const Component = () => <>{children}</>
    render(<Button as={Component} />)
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})
