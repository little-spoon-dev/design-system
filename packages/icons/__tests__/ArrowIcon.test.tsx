import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { ArrowIconProps } from '../src/ArrowIcon'
import ArrowIcon from '../src/ArrowIcon'

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
      render(<ArrowIcon size={size} />)
      expect(screen.getByTitle('Arrow icon')).toBeInTheDocument()
    },
  )

  it('does not throw for invalid size', () => {
    render(<ArrowIcon size={'' as ArrowIconProps['size']} />)
    expect(screen.getByTitle('Arrow icon')).toBeInTheDocument()
  })
})

describe('with props.fill', () => {
  render(<ArrowIcon fill={'black'} />)
  expect(screen.getByTitle('Arrow icon')).toBeInTheDocument()
})

describe('with props.direction', () => {
  it.each<ArrowIconProps['direction']>(['up', 'down', 'left', 'right'])(
    'renders arrow icon with direction=%j',
    (direction) => {
      render(<ArrowIcon direction={direction} />)
      expect(screen.getByTitle('Arrow icon')).toBeInTheDocument()
    },
  )

  it('does not throw for invalid dierction', () => {
    render(<ArrowIcon direction={'' as ArrowIconProps['direction']} />)
    expect(screen.getByTitle('Arrow icon')).toBeInTheDocument()
  })
})
