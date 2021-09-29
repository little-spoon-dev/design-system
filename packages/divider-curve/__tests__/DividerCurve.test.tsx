import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import DividerCurve from '../src'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<DividerCurve />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('when no props are passed', () => {
  it('should render when no props are passed', () => {
    render(<DividerCurve />)
    // @ts-ignore
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })
})

describe('when passed variant props', () => {
  it('renders variant 1', () => {
    render(<DividerCurve variant={1} />)
    // @ts-ignore
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })

  it('renders variant 2', () => {
    render(<DividerCurve variant={2} />)
    // @ts-ignore
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })
})
