import { allColors, Color } from '@littlespoon/theme/src/colors'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { LabelProps } from '../src/'
import Label from '../src/'

const children = 'children'

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
  it.each<Required<LabelProps>['size']>(['small', 'medium', 'large'])(
    'renders label with size=%j',
    (size) => {
      render(<Label size={size}>{size}</Label>)
      expect(screen.getByText(size)).toBeInTheDocument()
    },
  )
})

describe('with props.color', () => {
  it.each<Required<LabelProps>['color']>(Object.keys(allColors) as readonly Color[])(
    'renders label with color=%j',
    (color) => {
      render(<Label color={color}>{color}</Label>)
      expect(screen.getByText(color)).toBeInTheDocument()
    },
  )

  it.each<[Required<LabelProps>['color'], string]>([
    ['success20', 'background-color: rgba(153,199,187,1)'],
  ])('renders label with %s style', (color, style) => {
    render(<Label color={color}>{color}</Label>)
    expect(document.querySelectorAll('label')).toHaveLength(1)
    expect(screen.getByText(color)).toHaveStyle(style)
  })

  it('does not throw for invalid size', () => {
    render(<Label size={'' as LabelProps['size']}>{children}</Label>)
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})

describe('with props.color', () => {
  it('does not throw for invalid color', () => {
    render(<Label color={'' as LabelProps['color']}>{children}</Label>)
    expect(screen.getByText(children)).toBeInTheDocument()
  })

  it.each<Required<LabelProps>['color']>(Object.keys(allColors) as readonly Color[])(
    'renders label with color=%j',
    (color) => {
      render(<Label color={color}>{color}</Label>)
      expect(screen.getByText(color)).toBeInTheDocument()
    },
  )
})
