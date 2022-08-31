import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import SubtractIcon, { SubtractIconProps } from '../src/SubtractIcon'

const label = 'label'

describe('accessibility', () => {
  it('is accessible with no props', async () => {
    const { container } = render(<SubtractIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has title', async () => {
    render(<SubtractIcon />)
    expect(screen.getByTitle('Subtract icon')).toBeInTheDocument()
  })
})

describe('with props.size', () => {
  it.each<SubtractIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
    'renders check icon with size=%j',
    (size) => {
      let scale = 1
      switch (size) {
        case 'xsmall':
          scale = 0.5
          break
        case 'medium':
          scale = 2
          break
        case 'large':
          scale = 3.2
          break
      }
      render(<SubtractIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(${scale})`)
    },
  )

  it('does not throw for invalid size', () => {
    render(<SubtractIcon size={'' as SubtractIconProps['size']} />)
    expect(screen.getByTitle('Subtract icon')).toBeInTheDocument()
  })
})

describe('with props.fill', () => {
  render(<SubtractIcon fill="#bada55" stroke="#bada55" />)
  expect(screen.getByTitle('Subtract icon')).toBeInTheDocument()
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<SubtractIcon aria-label={label} />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})
