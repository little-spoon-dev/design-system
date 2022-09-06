import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { InfoIconProps } from '../src/InfoIcon'
import InfoIcon from '../src/InfoIcon'

const label = 'label'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<InfoIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with props.size', () => {
  it.each<InfoIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
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
      render(<InfoIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(${scale})`)
    },
  )

  it('does not throw for invalid size', () => {
    render(<InfoIcon size={'' as InfoIconProps['size']} />)
    expect(screen.getByTitle('Info icon')).toBeInTheDocument()
  })
})

describe('with props.fill', () => {
  render(<InfoIcon fill="#bada55" stroke="#bada55" />)
  expect(screen.getByTitle('Info icon')).toBeInTheDocument()
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<InfoIcon aria-label={label} />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})
