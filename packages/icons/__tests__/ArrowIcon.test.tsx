import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { ArrowIconProps } from '../src/ArrowIcon'
import ArrowIcon from '../src/ArrowIcon'
import { getRotate, getScale } from '../src/utils/css-helpers'

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
      render(<ArrowIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(
        `transform: scale(${getScale(size)}) rotate(0deg)`,
      )
    },
  )

  it('does not throw for invalid size', () => {
    render(<ArrowIcon size={'' as ArrowIconProps['size']} />)
    expect(screen.getByTitle('Arrow icon')).toBeInTheDocument()
  })
})

describe('with props.fill', () => {
  it('renders arrow icon with props.fill', () => {
    render(<ArrowIcon fill="#bada55" />)
    expect(screen.getByTitle('Arrow icon')).toBeInTheDocument()
  })
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
      expect(screen.getByLabelText(label)).toHaveStyle(
        `transform: scale(1) rotate(${getRotate(direction)}deg)`,
      )
    },
  )

  it('does not throw for invalid direction', () => {
    render(<ArrowIcon aria-label={label} size={'' as ArrowIconProps['size']} />)
    expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(1) rotate(0deg)`)
  })
})
