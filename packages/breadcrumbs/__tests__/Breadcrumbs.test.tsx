import { primary } from '@littlespoon/theme/lib/fonts'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import { Breadcrumbs } from '../src'
import { Breadcrumb } from '../src'
import type { BreadcrumbsProps } from '../src/'

const componentsWithoutProps = (
  <Breadcrumbs>
    <Breadcrumb>
      <a href={'url.com'}>Breadcrumb</a>
    </Breadcrumb>
    <Breadcrumb>
      <a href={'url.com'}>Breadcrumb</a>
    </Breadcrumb>
    <Breadcrumb isActive>Active</Breadcrumb>
  </Breadcrumbs>
)

const fontSizes = {
  small: primary.paragraph.small.fontSize,
  medium: primary.paragraph.medium.fontSize,
  large: primary.paragraph.large.fontSize,
}

const sizes: ['small', 'medium', 'large'] = ['small', 'medium', 'large']

describe('accessibility', () => {
  it('is accessible when rendering Breadcrumbs', async () => {
    const { container } = render(componentsWithoutProps)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('rendering components', () => {
  it('renders expected amount of breadcrumbs', () => {
    render(componentsWithoutProps)
    const breadcrumbs = screen.getAllByText('Breadcrumb')
    expect(breadcrumbs).toHaveLength(2)
    const active = screen.getAllByText('Active')
    expect(active).toHaveLength(1)
  })
})

describe('rendering sizes', () => {
  it.each(sizes)('renders breadcrumbs with size=%j', (size) => {
    render(
      <Breadcrumbs size={size}>
        <Breadcrumb>
          <a href={'url.com'}>Breadcrumb</a>
        </Breadcrumb>
        <Breadcrumb>
          <a href={'url.com'}>Breadcrumb</a>
        </Breadcrumb>
        <Breadcrumb isActive>Active</Breadcrumb>
      </Breadcrumbs>,
    )
    // @ts-ignore
    expect(screen.getByRole('list')).toHaveStyle(`font-size: ${fontSizes[size]}`)
  })

  it('does not throw for invalid size', () => {
    render(
      <Breadcrumbs size={'' as BreadcrumbsProps['size']}>
        <Breadcrumb>
          <a href={'url.com'}>Breadcrumb</a>
        </Breadcrumb>
        <Breadcrumb>
          <a href={'url.com'}>Breadcrumb</a>
        </Breadcrumb>
        <Breadcrumb isActive>Active</Breadcrumb>
      </Breadcrumbs>,
    )
    const breadcrumbs = screen.getAllByText('Breadcrumb')
    expect(breadcrumbs).toHaveLength(2)
  })
})
