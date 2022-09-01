import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { GiftCardIconProps } from '../src/GiftCardIcon'
import GiftCardIcon from '../src/GiftCardIcon'
import { getScale } from '../src/utils/css-helpers'

const label = 'label'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<GiftCardIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with props.size', () => {
  it.each<GiftCardIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
    'renders gift card icon with size=%j',
    (size) => {
      render(<GiftCardIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(${getScale(size)})`)
    },
  )

  it('does not throw for invalid size', () => {
    render(<GiftCardIcon size={'' as GiftCardIconProps['size']} />)
    expect(screen.getByTitle('GiftCard icon')).toBeInTheDocument()
  })
})

describe('with props.fill', () => {
  it('renders gift card icon with props.fill', () => {
    render(<GiftCardIcon fill="#bada55" />)
    expect(screen.getByTitle('GiftCard icon')).toBeInTheDocument()
  })
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<GiftCardIcon aria-label={label} />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})
