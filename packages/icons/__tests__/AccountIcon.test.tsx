import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { AccountIconProps } from '../src/AccountIcon'
import AccountIcon from '../src/AccountIcon'
import { getScale } from '../src/utils/css-helpers'

const label = 'label'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<AccountIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with props.size', () => {
  it.each<AccountIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
    'renders bill icon with size=%j',
    (size) => {
      render(<AccountIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(${getScale(size)})`)
    },
  )

  it('does not throw for invalid size', () => {
    render(<AccountIcon size={'' as AccountIconProps['size']} />)
    expect(screen.getByTitle('Account icon')).toBeInTheDocument()
  })
})

describe('with props.fill', () => {
  it('renders account icon with props.fill', () => {
    render(<AccountIcon fill="#bada55" />)
    expect(screen.getByTitle('Account icon')).toBeInTheDocument()
  })
})

describe('with props.stroke', () => {
  it('renders account icon with props.stroke', () => {
    render(<AccountIcon stroke="#bada55" />)
    expect(screen.getByTitle('Account icon')).toBeInTheDocument()
  })
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<AccountIcon aria-label={label} />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})
