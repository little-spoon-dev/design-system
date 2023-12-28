import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { BillIconProps } from '../src/BillIcon'
import BillIcon from '../src/BillIcon'
import { getScale } from '../src/utils/css-helpers'

const label = 'label'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<BillIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with props.size', () => {
  it.each<BillIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
    'renders bill icon with size=%j',
    (size) => {
      render(<BillIcon aria-label={label} size={size} />)
      expect(screen.getByLabelText(label)).toHaveStyle(`transform: scale(${getScale(size)})`)
    },
  )

  it('does not throw for invalid size', () => {
    render(<BillIcon size={'' as BillIconProps['size']} />)
    expect(screen.getByTitle('Bill icon')).toBeInTheDocument()
  })
})

describe('with props.fill', () => {
  it('renders bill icon with props.fill', () => {
    render(<BillIcon fill="#bada55" />)
    expect(screen.getByTitle('Bill icon')).toBeInTheDocument()
  })
})

describe('with props.stroke', () => {
  it('renders bill icon with props.stroke', () => {
    render(<BillIcon stroke="#bada55" />)
    expect(screen.getByTitle('Bill icon')).toBeInTheDocument()
  })
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<BillIcon aria-label={label} />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})
