import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Divider from '../src'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<Divider />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('when no props are passed', () => {
  it('should render when no props are passed', () => {
    render(<Divider />)
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })
})

describe('when passed variant props', () => {
  it('renders inverted variant', () => {
    render(<Divider inverted />)
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })
})
