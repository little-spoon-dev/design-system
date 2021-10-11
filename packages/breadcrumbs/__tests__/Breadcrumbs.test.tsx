import { primary } from '@littlespoon/theme/lib/fonts'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import { Breadcrumbs } from '../src'
import { Breadcrumb } from '../src'
import type { BreadcrumbProps } from '../src/'

const props = {
  routes: [
    { href: 'url.com', name: 'Breadcrumb' },
    { href: 'url.com', name: 'Breadcrumb' },
    { name: 'Active' },
  ],
}

const fontSizes = {
  small: primary.paragraph.small.fontSize,
  medium: primary.paragraph.medium.fontSize,
  large: primary.paragraph.large.fontSize,
}

const sizes: ['small', 'medium', 'large'] = ['small', 'medium', 'large']

describe('accessibility', () => {
  it('is accessible when rendering Breadcrumbs', async () => {
    const { container } = render(<Breadcrumbs {...props} />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('is accessible when rendering individual Breadcrumb', async () => {
    const { container } = render(<Breadcrumb {...props.routes[0]} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('rendering components', () => {
  it('renders expected amount of breadcrumbs', () => {
    render(<Breadcrumbs {...props} />)
    const breadcrumbs = screen.getAllByText('Breadcrumb')
    expect(breadcrumbs).toHaveLength(2)
    // @ts-ignore
    const separators = screen.getAllByRole('separator')
    expect(separators).toHaveLength(2)
    const active = screen.getAllByText('Active')
    expect(active).toHaveLength(1)
  })

  it('renders individual breadcrumb', () => {
    render(<Breadcrumb {...props.routes[0]} />)
    expect(screen.getAllByText('Breadcrumb')).toHaveLength(1)
  })
})

describe('rendering component types', () => {
  it('renders component as a type as default', () => {
    render(<Breadcrumbs {...props} />)
    // @ts-ignore
    expect(screen.getAllByRole('link')).toHaveLength(2)
  })

  it('renders breadcrumbs as provided component prop', () => {
    render(<Breadcrumbs as={'button'} {...props} />)
    // @ts-ignore
    expect(screen.getAllByRole('button')).toHaveLength(2)
  })

  it('renders individual breadcrumb as provided component prop', () => {
    render(<Breadcrumb as={'button'} {...props.routes[0]} />)
    // @ts-ignore
    expect(screen.getAllByRole('button')).toHaveLength(1)
  })
})

describe('rendering sizes', () => {
  it.each(sizes)('renders breadcrumbs with size=%j', (size) => {
    render(<Breadcrumbs {...props} size={size} />)
    expect(screen.getByText('Active')).toHaveStyle(`font-size: ${fontSizes[size]}`)
  })

  it.each(sizes)('renders individual breadcrumb with size=%j', (size) => {
    render(<Breadcrumb {...props.routes[0]} size={size} />)
    expect(screen.getByText('Breadcrumb')).toHaveStyle(`font-size: ${fontSizes[size]}`)
  })

  it('does not throw for invalid size', () => {
    render(<Breadcrumb {...props.routes[0]} size={'' as BreadcrumbProps<'a'>['size']} />)
    expect(screen.getByText('Breadcrumb')).toBeInTheDocument()
  })
})
