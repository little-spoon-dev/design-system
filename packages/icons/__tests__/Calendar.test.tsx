import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { CalendarIconProps } from '../src/CalendarIcon'
import CalendarIcon from '../src/CalendarIcon'
import { getScale } from '../src/utils/css-helpers'

const label = 'label'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<CalendarIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with props.size', () => {
  it.each<CalendarIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
    'renders calendar icon with size=%j',
    (size) => {
      render(<CalendarIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(${getScale(size)})`)
    },
  )

  it('does not throw for invalid size', () => {
    render(<CalendarIcon size={'' as CalendarIconProps['size']} />)
    expect(screen.getByTitle('Calendar icon')).toBeInTheDocument()
  })
})

describe('with props.fill', () => {
  it('renders calendar icon with props.fill', () => {
    render(<CalendarIcon fill="#bada55" stroke="#bada55" />)
    expect(screen.getByTitle('Calendar icon')).toBeInTheDocument()
  })
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<CalendarIcon aria-label={label} />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})
