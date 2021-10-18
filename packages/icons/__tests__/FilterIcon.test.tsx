import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { FilterIconProps } from '../src/FilterIcon'
import FilterIcon from '../src/FilterIcon'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<FilterIcon />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with props.className', () => {
  it('renders filter icon with className', () => {
    render(<FilterIcon className={'custom-filter-icon'} />)
    expect(screen.getByTitle('Filter icon')).toBeInTheDocument()
  })
})

describe('with props.size', () => {
  it.each<FilterIconProps['size']>(['xsmall', 'small', 'medium', 'large'])(
    'renders filter icon with size=%j',
    (size) => {
      render(<FilterIcon size={size} />)
      expect(screen.getByTitle('Filter icon')).toBeInTheDocument()
    },
  )

  it('does not throw for invalid size', () => {
    render(<FilterIcon size={'' as FilterIconProps['size']} />)
    expect(screen.getByTitle('Filter icon')).toBeInTheDocument()
  })
})

describe('with props.stroke', () => {
  it('renders filter icon with stroke', () => {
    render(<FilterIcon stroke={'black'} />)
    expect(screen.getByTitle('Filter icon')).toBeInTheDocument()
  })
})
