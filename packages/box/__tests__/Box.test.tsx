import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Box from '../src'

it('is accessible', async () => {
  const { container } = render(<Box>text</Box>)
  expect(await axe(container)).toHaveNoViolations()
})

it('renders text', () => {
  const text = 'text'
  render(<Box>{text}</Box>)
  expect(screen.getByText(text)).toBeInTheDocument()
})

it('renders style', () => {
  const text = 'text'
  render(<Box sx={{ marginBottom: '1rem' }}>{text}</Box>)
  expect(screen.getByText(text)).toHaveStyle('margin-bottom: 1rem')
})
