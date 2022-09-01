import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import CloseIcon, { CloseIconProps } from '../src/CloseIcon'
import { getScale } from '../src/utils/css-helpers'

const label = 'label'

describe('accessibility', () => {
  it('is accessible with no props', async () => {
    const { container } = render(<CloseIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has title', async () => {
    render(<CloseIcon />)
    expect(screen.getByTitle('Close icon')).toBeInTheDocument()
  })
})

describe('with props.size', () => {
  it.each<CloseIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
    'renders bill icon with size=%j',
    (size) => {
      render(<CloseIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(${getScale(size)})`)
    },
  )

  it('does not throw for invalid size', () => {
    render(<CloseIcon size={'' as CloseIconProps['size']} />)
    expect(screen.getByTitle('Close icon')).toBeInTheDocument()
  })
})

describe('with props.className', () => {
  it('renders filter icon with className', () => {
    const className = 'class'
    render(<CloseIcon aria-label={label} className={className} />)
    expect(screen.getByLabelText(label)).toHaveClass(className)
  })
})

describe('with props.fill', () => {
  it('renders filter icon with stroke', () => {
    render(<CloseIcon fill="#bada55" />)
    expect(screen.getByTitle('Close icon')).toBeInTheDocument()
  })
})

describe('with props.stroke', () => {
  it('renders filter icon with stroke', () => {
    render(<CloseIcon stroke="#bada55" />)
    expect(screen.getByTitle('Close icon')).toBeInTheDocument()
  })
})
