import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { HamburgerMenuIconProps } from '../src/HamburgerMenuIcon'
import HamburgerMenuIcon from '../src/HamburgerMenuIcon'
import { getScale } from '../src/utils/css-helpers'

const label = 'label'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<HamburgerMenuIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with props.size', () => {
  it.each<HamburgerMenuIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
    'renders hamburger menu icon with size=%j',
    (size) => {
      render(<HamburgerMenuIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(${getScale(size)})`)
    },
  )

  it('does not throw for invalid size', () => {
    render(<HamburgerMenuIcon size={'' as HamburgerMenuIconProps['size']} />)
    expect(screen.getByTitle('Hamburger menu icon')).toBeInTheDocument()
  })
})

describe('with props.fill', () => {
  it('renders hamburger menu icon with props.fill', () => {
    render(<HamburgerMenuIcon fill="#bada55" />)
    expect(screen.getByTitle('Hamburger menu icon')).toBeInTheDocument()
  })
})

describe('with props.stroke', () => {
  it('renders hamburger menu icon with props.stroke', () => {
    render(<HamburgerMenuIcon stroke="#bada55" />)
    expect(screen.getByTitle('Hamburger menu icon')).toBeInTheDocument()
  })
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<HamburgerMenuIcon aria-label={label} />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})
