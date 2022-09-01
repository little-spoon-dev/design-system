import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { BoxIconProps } from '../src/BoxIcon'
import BoxIcon from '../src/BoxIcon'
import { getScale } from '../src/utils/css-helpers'

const label = 'label'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<BoxIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with props.size', () => {
  it.each<BoxIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
    'renders box icon with size=%j',
    (size) => {
      render(<BoxIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(${getScale(size)})`)
    },
  )

  it('does not throw for invalid size', () => {
    render(<BoxIcon size={'' as BoxIconProps['size']} />)
    expect(screen.getByTitle('Box icon')).toBeInTheDocument()
  })
})

describe('with props.fill', () => {
  it('renders box icon with props.fill', () => {
    render(<BoxIcon fill="#bada55" />)
    expect(screen.getByTitle('Box icon')).toBeInTheDocument()
  })
})

describe('with props.notificationColor', () => {
  it('renders box icon with props.notificationColor', () => {
    render(<BoxIcon notificationColor="#bada55" />)
    expect(screen.getByTitle('Box icon')).toBeInTheDocument()
  })
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<BoxIcon aria-label={label} />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})
