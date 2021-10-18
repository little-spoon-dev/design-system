import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import CloseIcon from '../src/CloseIcon'

describe('accessibility', () => {
  it('is accessible with no props', async () => {
    const { container } = render(<CloseIcon />)
    expect(await axe(container)).toHaveNoViolations()
    expect(screen.getByTitle('Close icon')).toBeInTheDocument()
  })
})
