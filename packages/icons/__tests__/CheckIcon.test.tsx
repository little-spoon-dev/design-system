import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { CheckIconProps } from '../src/CheckIcon'
import CheckIcon from '../src/CheckIcon'

const label = 'label'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<CheckIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with props.size', () => {
  it.each<CheckIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
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
      render(<CheckIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(${scale})`)
    },
  )

  it('does not throw for invalid size', () => {
    render(<CheckIcon size={'' as CheckIconProps['size']} />)
    expect(screen.getByTitle('Check icon')).toBeInTheDocument()
  })
})

describe('with props.fill', () => {
  render(<CheckIcon fill="#bada55" stroke="#bada55" />)
  expect(screen.getByTitle('Check icon')).toBeInTheDocument()
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<CheckIcon aria-label={label} />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})
