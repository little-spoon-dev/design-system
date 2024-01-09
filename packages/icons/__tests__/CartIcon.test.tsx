import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { CartIconProps } from '../src/CartIcon'
import CartIcon from '../src/CartIcon'
import { getScale } from '../src/utils/css-helpers'

const label = 'label'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<CartIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with props.size', () => {
  it.each<CartIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
    'renders cart icon with size=%j',
    (size) => {
      render(<CartIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(${getScale(size)})`)
    },
  )

  it('does not throw for invalid size', () => {
    render(<CartIcon size={'' as CartIconProps['size']} />)
    expect(screen.getByTitle('Cart icon')).toBeInTheDocument()
  })
})

describe('with props.fill', () => {
  it('renders cart icon with props.fill', () => {
    render(<CartIcon fill="#bada55" />)
    expect(screen.getByTitle('Cart icon')).toBeInTheDocument()
  })
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<CartIcon aria-label={label} />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})
