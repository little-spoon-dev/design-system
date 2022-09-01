import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { LogoutIconProps } from '../src/LogoutIcon'
import LogoutIcon from '../src/LogoutIcon'
import { getScale } from '../src/utils/css-helpers'

const label = 'label'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<LogoutIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with props.size', () => {
  it.each<LogoutIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
    'renders logout icon with size=%j',
    (size) => {
      render(<LogoutIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(${getScale(size)})`)
    },
  )

  it('does not throw for invalid size', () => {
    render(<LogoutIcon size={'' as LogoutIconProps['size']} />)
    expect(screen.getByTitle('Logout icon')).toBeInTheDocument()
  })
})

describe('with props.fill', () => {
  it('renders bill icon with props.fill', () => {
    render(<LogoutIcon fill="#bada55" />)
    expect(screen.getByTitle('Logout icon')).toBeInTheDocument()
  })
})

describe('with props.stroke', () => {
  it('renders logout icon with props.stroke', () => {
    render(<LogoutIcon stroke="#bada55" />)
    expect(screen.getByTitle('Logout icon')).toBeInTheDocument()
  })
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<LogoutIcon aria-label={label} />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})
