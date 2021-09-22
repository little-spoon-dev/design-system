import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { ButtonProps } from '../src/'
import Button from '../src/'

it('is accessible', async () => {
  const { container } = render(<Button>text</Button>)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders button with no props', () => {
  render(<Button />)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(screen.getByRole('button')).toBeInTheDocument()
})

it('renders button with children', () => {
  render(<Button>text</Button>)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(screen.getByRole('button', { name: 'text' })).toBeInTheDocument()
})

it('renders button with aria-label', () => {
  render(<Button aria-label="label" />)
  expect(screen.getByLabelText('label')).toBeInTheDocument()
})

it.each<ButtonProps['size']>(['small', 'medium', 'large', 'xlarge'])(
  'renders button with size=%j',
  (size) => {
    render(<Button size={size}>{size}</Button>)
    expect(screen.getByText(size as string)).toBeInTheDocument()
  },
)

it.each<ButtonProps['variant']>(['primary', 'secondary', 'ghost', 'overlay', 'critical'])(
  'renders button with variant=%j',
  (variant) => {
    render(<Button variant={variant}>{variant}</Button>)
    expect(screen.getByText(variant as string)).toBeInTheDocument()
  },
)

it('does not throw for invalid prop size', () => {
  render(<Button size={'' as ButtonProps['size']}>text</Button>)
  expect(screen.getByText('text')).toBeInTheDocument()
})

it('does not throw for invalid prop variant', () => {
  render(<Button variant={'' as ButtonProps['variant']}>text</Button>)
  expect(screen.getByText('text')).toBeInTheDocument()
})

it.each<ButtonProps['variant']>(['primary', 'secondary'])(
  'renders disabled button with variant=%j',
  (variant) => {
    render(
      <Button disabled variant={variant}>
        {variant}
      </Button>,
    )
    expect(screen.getByText(variant as string)).toBeDisabled()
  },
)
