import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { ArrowIconProps } from '../src/ArrowIcon'
import ArrowIcon from '../src/ArrowIcon'

const label = 'label'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<ArrowIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with props.size', () => {
  it.each<ArrowIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
    'renders arrow icon with size=%j',
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
      render(<ArrowIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(${scale}) rotate(0deg)`)
    },
  )

  it('does not throw for invalid size', () => {
    render(<ArrowIcon size={'' as ArrowIconProps['size']} />)
    expect(screen.getByTitle('Arrow icon')).toBeInTheDocument()
  })
})

describe('with props.fill', () => {
  render(<ArrowIcon fill="#bada55" />)
  expect(screen.getByTitle('Arrow icon')).toBeInTheDocument()
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<ArrowIcon aria-label={label} />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})

describe('with props.direction', () => {
  it.each<ArrowIconProps['direction']>(['up', 'right', 'down', 'left'])(
    'renders arrow icon with direction=%j',
    (direction) => {
      render(<ArrowIcon aria-label={label} direction={direction} />)
      let rotate = 0
      switch (direction) {
        case 'up':
          rotate = 180
          break
        case 'left':
          rotate = 90
          break
        case 'right':
          rotate = -90
          break
      }
      expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(1) rotate(${rotate}deg)`)
    },
  )

  it('does not throw for invalid direction', () => {
    render(<ArrowIcon aria-label={label} size={'' as ArrowIconProps['size']} />)
    expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(1) rotate(0deg)`)
  })
})
