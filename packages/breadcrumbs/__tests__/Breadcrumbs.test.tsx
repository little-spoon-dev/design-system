import { paragraph } from '@littlespoon/theme/lib/fonts/primary'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import { Breadcrumbs } from '../src'
import { Breadcrumb } from '../src'
import type { BreadcrumbsProps } from '../src/'

const url = 'https://example.com/'

const breadcrumbs = (
  <Breadcrumbs>
    <Breadcrumb>
      <a href={url}>Breadcrumb</a>
    </Breadcrumb>
    <Breadcrumb>
      <a href={url}>Breadcrumb</a>
    </Breadcrumb>
    <Breadcrumb active>Active</Breadcrumb>
  </Breadcrumbs>
)

const sizes = ['small', 'medium', 'large'] as const

describe('accessibility', () => {
  it('is accessible when rendering Breadcrumbs', async () => {
    const { container } = render(breadcrumbs)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with props.children', () => {
  it('renders expected number of breadcrumbs', () => {
    render(breadcrumbs)
    expect(screen.getAllByText('Breadcrumb')).toHaveLength(2)
    const active = screen.getAllByText('Active')
    expect(active).toHaveLength(1)
  })
})

describe('with props.size', () => {
  it.each(sizes)('renders breadcrumbs with size=%j', (size) => {
    render(
      <Breadcrumbs size={size}>
        <Breadcrumb>
          <a href={url}>Breadcrumb</a>
        </Breadcrumb>
        <Breadcrumb>
          <a href={url}>Breadcrumb</a>
        </Breadcrumb>
        <Breadcrumb active>Active</Breadcrumb>
      </Breadcrumbs>,
    )
    expect(screen.getByRole('list')).toHaveStyle(`font-size: ${paragraph[size].fontSize}`)
  })

  it('does not throw for invalid size', () => {
    render(
      <Breadcrumbs size={'' as BreadcrumbsProps['size']}>
        <Breadcrumb>
          <a href={url}>Breadcrumb</a>
        </Breadcrumb>
        <Breadcrumb>
          <a href={url}>Breadcrumb</a>
        </Breadcrumb>
        <Breadcrumb active>Active</Breadcrumb>
      </Breadcrumbs>,
    )
    const breadcrumbs = screen.getAllByText('Breadcrumb')
    expect(breadcrumbs).toHaveLength(2)
  })
})
