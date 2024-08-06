import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { ButtonProps, Size } from '../src/'
import Button from '../src/'

const children = 'children'
const variants = ['primary', 'secondary', 'tertiary', 'ghost'] as const

describe('accessibility', () => {
  describe('button', () => {
    it('is accessible with text', async () => {
      const { container } = render(<Button>{children}</Button>)
      expect(document.querySelectorAll('button')).toHaveLength(1)
      expect(await axe(container)).toHaveNoViolations()
    })

    it('is not accessible without text', async () => {
      const { container } = render(<Button />)
      expect(document.querySelectorAll('button')).toHaveLength(1)
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
      expect(document.querySelectorAll('a')).toHaveLength(1)
      expect(await axe(container)).toHaveNoViolations()
    })

    it('is not accessible without text and href', async () => {
      const { container } = render(<Button as="a" href="" />)
      expect(document.querySelectorAll('a')).toHaveLength(1)
      expect(await axe(container)).not.toHaveNoViolations()
    })
  })
})

describe('no props', () => {
  it('renders button', () => {
    render(<Button />)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })
})

describe('with props.children', () => {
  it('renders text', () => {
    render(<Button>{children}</Button>)
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
  it.each<Required<ButtonProps<'button'>>['size']>(['small', 'medium', 'large', 'xlarge'])(
    'renders button with size=%j',
    (size) => {
      render(<Button size={size}>{size}</Button>)
      expect(screen.getByText(size as Size)).toBeInTheDocument()
    },
  )
})

describe('with props.variant', () => {
  it.each<Required<ButtonProps<'button'>>['variant']>(variants)(
    'renders button with variant=%j',
    (variant) => {
      render(<Button variant={variant}>{variant}</Button>)
      expect(screen.getByText(variant)).toBeInTheDocument()
    },
  )

  it.each<[Required<ButtonProps<'button'>>['variant'], string]>([
    ['primary', 'background-color: rgb(0, 0, 0)'],
    ['secondary', 'background-color: rgb(0, 227, 205)'],
    ['tertiary', 'background-color: rgb(255, 255, 255)'],
    ['ghost', 'background-color: rgb(255, 255, 255)'],
  ])('renders button with %s style', (variant, style) => {
    render(<Button variant={variant}>{variant}</Button>)
    expect(document.querySelectorAll('button')).toHaveLength(1)
    expect(screen.getByText(variant)).toHaveStyle(style)
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

  it.each<Required<ButtonProps<'button'>>['variant']>(variants)(
    'renders button with variant=%j',
    (variant) => {
      render(<Button variant={variant}>{variant}</Button>)
      expect(screen.getByText(variant)).toBeInTheDocument()
    },
  )
})

describe('with props.disabled', () => {
  it('renders disabled button not throw for invalid variant', () => {
    render(<Button disabled>{children}</Button>)
    expect(screen.getByText(children)).toBeDisabled()
  })

  it.each<Required<ButtonProps<'button'>>['variant']>(variants)(
    'renders disabled button with variant=%j',
    (variant) => {
      render(
        <Button disabled variant={variant}>
          {variant}
        </Button>,
      )
      expect(screen.getByText(variant)).toBeDisabled()
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
    const element = screen.getByRole('link', { name: children })
    expect(element).toHaveAttribute('href', href)
    expect(element).toHaveStyle('color: rgb(255, 255, 255)')
  })

  it('renders component', () => {
    const Component = () => <>{children}</>
    render(<Button as={Component} />)
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})

describe('with props.size as object', () => {
  it('have proper styles for size with breakpoints', () => {
    const text = 'Size by breakpoint test desktop'
    render(
      <Button
        size={{
          0: 'small',
          1500: 'large',
        }}
      >
        {text}
      </Button>,
    )

    expect(document.querySelectorAll('button').length).toBe(1)
    expect(screen.getByText(text)).toHaveStyle({
      height: '3.2rem',
      padding: '0.6rem 1.6rem',
    })
  })
})
