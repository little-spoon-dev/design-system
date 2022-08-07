import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { LabelProps } from '../src/'
import Label from '../src/'

const children = 'children'
const variants = [
  'success',
  'warning',
  'critical',
  'informative',
  'BLW',
  'most-popular',
  'picky-eater-fave',
  'seasonal',
  'beggie-packed',
] as const

describe('accessibility', () => {
  describe('label', () => {
    it('is accessible with text', async () => {
      const { container } = render(<Label>{children}</Label>)
      expect(document.querySelectorAll('label')).toHaveLength(1)
      expect(await axe(container)).toHaveNoViolations()
    })

    it('is accessible without text', async () => {
      const { container } = render(<Label />)
      expect(document.querySelectorAll('label')).toHaveLength(1)
      expect(await axe(container)).toHaveNoViolations()
    })
  })
})

describe('no props', () => {
  it('renders label', async () => {
    render(<Label htmlFor="name"></Label>)
    expect(document.querySelector('label')).toHaveAttribute('for', 'name')
  })
})

describe('with props.children', () => {
  it('renders text', () => {
    render(<Label>{children}</Label>)
    expect(document.querySelector('label')).toHaveTextContent(children)
  })

  it('renders span with text', () => {
    render(
      <Label>
        <span>{children}</span>
      </Label>,
    )
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<Label aria-label="label" />)
    expect(screen.getByLabelText('label')).toBeInTheDocument()
  })
})

describe('with props.size', () => {
  it.each<Required<LabelProps<'label'>>['size']>(['small', 'medium', 'large'])(
    'renders label with size=%j',
    (size) => {
      render(<Label size={size}>{size}</Label>)
      expect(screen.getByText(size)).toBeInTheDocument()
    },
  )
})

describe('with props.variant', () => {
  it.each<Required<LabelProps<'label'>>['variant']>(variants)(
    'renders label with variant=%j',
    (variant) => {
      render(<Label variant={variant}>{variant}</Label>)
      expect(screen.getByText(variant)).toBeInTheDocument()
    },
  )

  it.each<[Required<LabelProps<'label'>>['variant'], string]>([
    ['success', 'background-color: rgb(153, 199, 187)'],
    ['warning', 'background-color: rgb(252, 208, 168)'],
    ['critical', 'background-color: rgb(237, 169, 159)'],
    ['informative', 'background-color: rgb(169, 193, 231)'],
    ['BLW', 'background-color: rgb(255, 145, 165)'],
    ['most-popular', 'background-color: rgb(0, 227, 205)'],
    ['picky-eater-fave', 'background-color: rgb(255, 128, 92)'],
    ['seasonal', 'background-color: rgb(252, 191, 74)'],
    ['beggie-packed', 'background-color: rgb(190, 242, 145)'],
  ])('renders label with %s style', (variant, style) => {
    render(<Label variant={variant}>{variant}</Label>)
    expect(document.querySelectorAll('label')).toHaveLength(1)
    expect(screen.getByText(variant)).toHaveStyle(style)
  })

  it('does not throw for invalid size', () => {
    render(<Label size={'' as LabelProps<'label'>['size']}>{children}</Label>)
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})

describe('with props.variant', () => {
  it('does not throw for invalid variant', () => {
    render(<Label variant={'' as LabelProps<'label'>['variant']}>{children}</Label>)
    expect(screen.getByText(children)).toBeInTheDocument()
  })

  it.each<Required<LabelProps<'label'>>['variant']>(variants)(
    'renders label with variant=%j',
    (variant) => {
      render(<Label variant={variant}>{variant}</Label>)
      expect(screen.getByText(variant)).toBeInTheDocument()
    },
  )
})

describe('with props.as', () => {
  it('renders link', () => {
    const href = 'https://example.com/'
    render(
      <Label as="a" href={href}>
        {children}
      </Label>,
    )
    const element = screen.getByRole('link', { name: children })
    expect(element).toHaveAttribute('href', href)
    expect(element).toHaveStyle('color: rgb(0, 0, 0)')
  })

  it('renders component', () => {
    const Component = () => <>{children}</>
    render(<Label as={Component} />)
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})
