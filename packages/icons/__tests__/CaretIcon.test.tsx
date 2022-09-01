import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { CaretIconProps } from '../src/CaretIcon'
import CaretIcon from '../src/CaretIcon'
import { getRotate, getScale } from '../src/utils/css-helpers'

const label = 'label'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<CaretIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with props.size', () => {
  it.each<CaretIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
    'renders caret icon with size=%j',
    (size) => {
      render(<CaretIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(
        `transform: scale(${getScale(size)}) rotate(0deg)`,
      )
    },
  )

  it('does not throw for invalid size', () => {
    render(<CaretIcon size={'' as CaretIconProps['size']} />)
    expect(screen.getByTitle('Caret icon')).toBeInTheDocument()
  })
})

describe('with props.fill', () => {
  it('renders caret icon with props.fill', () => {
    render(<CaretIcon fill="#bada55" />)
    expect(screen.getByTitle('Caret icon')).toBeInTheDocument()
  })
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<CaretIcon aria-label={label} />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})

describe('with props.direction', () => {
  it.each<CaretIconProps['direction']>(['up', 'right', 'down', 'left'])(
    'renders caret icon with direction=%j',
    (direction) => {
      render(<CaretIcon aria-label={label} direction={direction} />)
      expect(screen.getByLabelText(label)).toHaveStyle(
        `transform: scale(1) rotate(${getRotate(direction)}deg)`,
      )
    },
  )

  it('does not throw for invalid direction', () => {
    render(<CaretIcon aria-label={label} size={'' as CaretIconProps['size']} />)
    expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(1) rotate(0deg)`)
  })
})
