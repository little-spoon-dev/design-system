import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import OpenIcon from '../src/OpenIcon'

const label = 'label'

describe('accessibility', () => {
  it('is accessible with no props', async () => {
    const { container } = render(<OpenIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has title', async () => {
    render(<OpenIcon />)
    expect(screen.getByTitle('Open icon')).toBeInTheDocument()
  })
})

describe('with props.className', () => {
  it('renders filter icon with className', () => {
    const className = 'class'
    render(<OpenIcon aria-label={label} className={className} />)
    expect(screen.getByLabelText(label)).toHaveClass(className)
  })
})

describe('with props.fill', () => {
  it('renders filter icon with stroke', () => {
    render(<OpenIcon fill="#bada55" />)
    expect(screen.getByTitle('Open icon')).toBeInTheDocument()
  })
})

describe('with props.stroke', () => {
  it('renders filter icon with stroke', () => {
    render(<OpenIcon stroke="#bada55" />)
    expect(screen.getByTitle('Open icon')).toBeInTheDocument()
  })
})
