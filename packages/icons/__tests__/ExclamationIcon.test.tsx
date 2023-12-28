import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { ExclamationIconProps } from '../src/ExclamationIcon'
import ExclamationIcon from '../src/ExclamationIcon'

const label = 'label'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<ExclamationIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with props.size', () => {
  it.each<ExclamationIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
    'renders exclamation icon with size=%j',
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
      render(<ExclamationIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(${scale})`)
    },
  )

  it('does not throw for invalid size', () => {
    render(<ExclamationIcon size={'' as ExclamationIconProps['size']} />)
    expect(screen.getByTitle('Exclamation icon')).toBeInTheDocument()
  })
})

describe('with props.fill', () => {
  render(<ExclamationIcon fill="#bada55" stroke="#bada55" />)
  expect(screen.getByTitle('Exclamation icon')).toBeInTheDocument()
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<ExclamationIcon aria-label={label} />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})
