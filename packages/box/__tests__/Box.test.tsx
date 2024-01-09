import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Box from '../src'

const children = 'children'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<Box>{children}</Box>)
    expect(await axe(container)).toHaveNoViolations()
  })
})

it('renders text', () => {
  render(<Box>{children}</Box>)
  expect(screen.getByText(children)).toBeInTheDocument()
})

it('renders span', () => {
  render(
    <Box>
      <span>{children}</span>
    </Box>,
  )
  expect(document.querySelectorAll('span')).toHaveLength(1)
  expect(screen.getByText(children)).toBeInTheDocument()
})

it('renders as main', () => {
  render(<Box as="main">{children}</Box>)
  expect(document.querySelectorAll('main')).toHaveLength(1)
  expect(screen.getByText(children)).toBeInTheDocument()
})

it('renders style', () => {
  render(<Box sx={{ marginBottom: '1rem' }}>{children}</Box>)
  expect(screen.getByText(children)).toHaveStyle('margin-bottom: 1rem')
})
