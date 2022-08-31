import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import AddIcon, { AddIconProps } from '../src/AddIcon'
import { getScale } from '../src/utils/css-helpers'

const label = 'label'

describe('accessibility', () => {
  it('is accessible with no props', async () => {
    const { container } = render(<AddIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has title', async () => {
    render(<AddIcon />)
    expect(screen.getByTitle('Add icon')).toBeInTheDocument()
  })
})

describe('with props.size', () => {
  it.each<AddIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
    'renders bill icon with size=%j',
    (size) => {
      render(<AddIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(${getScale(size)})`)
    },
  )

  it('does not throw for invalid size', () => {
    render(<AddIcon size={'' as AddIconProps['size']} />)
    expect(screen.getByTitle('Add icon')).toBeInTheDocument()
  })
})

describe('with props.className', () => {
  it('renders add icon with className', () => {
    const className = 'class'
    render(<AddIcon aria-label={label} className={className} />)
    expect(screen.getByLabelText(label)).toHaveClass(className)
  })
})

describe('with props.fill', () => {
  it('renders add icon with props.fill', () => {
    render(<AddIcon fill="#bada55" />)
    expect(screen.getByTitle('Add icon')).toBeInTheDocument()
  })
})

describe('with props.stroke', () => {
  it('renders add icon with props.stroke', () => {
    render(<AddIcon stroke="#bada55" />)
    expect(screen.getByTitle('Add icon')).toBeInTheDocument()
  })
})
