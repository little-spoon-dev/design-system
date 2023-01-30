import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Link, { LinkProps, LinkUnderline } from '../src'

const children = 'children'
const href = '#'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<Link>{children}</Link>)
    expect(document.querySelectorAll('a').length).toBe(1)
    expect(await axe(container)).toHaveNoViolations()
  })
})

it('renders text', () => {
  render(<Link>{children}</Link>)
  expect(screen.getByText(children)).toBeInTheDocument()
})

it('renders link with href', () => {
  render(<Link href={href}>{children}</Link>)
  expect(screen.getByRole('link', { name: children })).toHaveAttribute('href', href)
})

describe('with props.underline', () => {
  it.each<[Required<LinkProps>['underline'], string]>([
    [LinkUnderline.ALWAYS, 'text-decoration: underline'],
    [LinkUnderline.HOVER, 'text-decoration: none'],
    [LinkUnderline.NONE, 'text-decoration: none'],
  ])('renders link with underline=%j', (underline, style) => {
    render(<Link underline={underline}>{underline}</Link>)
    expect(screen.getByText(underline)).toHaveStyle(style)
  })
})

describe('with props.disabled', () => {
  it('renders a disabled link', () => {
    render(<Link disabled>{children}</Link>)
    const link = screen.getByText(children)
    expect(link).toHaveAttribute('aria-disabled', 'true')
    expect(link).toHaveStyle('cursor: not-allowed')
  })
})

it('secures external link', () => {
  render(<Link target="_blank">{children}</Link>)
  expect(screen.getByText(children)).toHaveAttribute('rel', 'noopener noreferrer')
})
