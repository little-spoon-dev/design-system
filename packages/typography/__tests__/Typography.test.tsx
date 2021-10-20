import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { TypographyProps } from '../src/'
import Typography from '../src/'

const children = 'children'
const label = 'label'

describe('accessibility', () => {
  it('is accessible', async () => {
    const { container } = render(<Typography>{children}</Typography>)
    expect(document.querySelectorAll('p').length).toBe(1)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with no props', () => {
  it('renders p', () => {
    render(<Typography />)
    expect(document.querySelectorAll('p').length).toBe(1)
  })
})

describe('with props.children', () => {
  it('renders text', () => {
    render(<Typography>{children}</Typography>)
    expect(screen.getByText(children)).toBeInTheDocument()
  })

  it('renders span with text', () => {
    render(
      <Typography>
        <span>{children}</span>
      </Typography>,
    )
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})

describe('with props.aria-label', () => {
  it('renders label text', () => {
    render(<Typography aria-label={label} />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})

describe('with props.as', () => {
  it.each<Required<TypographyProps>['as']>(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'])(
    'renders as %j',
    (element) => {
      render(<Typography as={element}>{element}</Typography>)
      if (element[0] === 'h') {
        expect(
          // @ts-ignore
          screen.getByRole('heading', { level: Number(element[1]), name: element }),
        ).toBeInTheDocument()
      } else {
        expect(screen.getByText(element)).toBeInTheDocument()
      }
    },
  )

  it('does not throw for invalid as', () => {
    render(<Typography as={'section' as 'p'}>{children}</Typography>)
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})

describe('with props.noMargin', () => {
  it('renders paragraph with margin-bottom', () => {
    render(<Typography>{children}</Typography>)
    expect(screen.getByText(children)).toHaveStyle('margin-bottom: 0.8rem')
  })

  it('renders paragraph with no margin-bottom', () => {
    render(<Typography noMargin>{children}</Typography>)
    expect(screen.getByText(children)).toHaveStyle('margin: 0 0 0 0')
  })
})

describe('with props.variant', () => {
  it.each<[Required<TypographyProps>['variant'], string]>([
    ['display1', 'font: Mulish,sans-serif 7.4rem 700 7.4rem'],
    ['display2', 'font: Mulish,sans-serif 6.6rem 700 6.6rem'],
    ['h1', 'font: Mulish,sans-serif 5.2rem 700 5.2rem'],
    ['h2', 'font: Mulish,sans-serif 4.6rem 700 4.6rem'],
    ['h3', 'font: Mulish,sans-serif 3.6rem 700 3.6rem'],
    ['h4', 'font: Mulish,sans-serif 2.9rem 700 2.9rem'],
    ['h5', 'font: Mulish,sans-serif 2.6rem 700 2.6rem'],
    ['h6', 'font: Mulish,sans-serif 2rem 700 2rem'],
    ['p', 'font: Lato,sans-serif 1.6rem 400 1.6rem'],
    ['p1', 'font: Lato,sans-serif 2rem 400 2rem'],
    ['p2', 'font: Lato,sans-serif 1.8rem 400 1.8rem'],
    ['p3', 'font: Lato,sans-serif 1.6rem 400 1.6rem'],
    ['p4', 'font: Lato,sans-serif 1.4rem 400 1.4rem'],
  ])('renders p with variant=%j', (variant, style) => {
    render(<Typography variant={variant}>{variant}</Typography>)
    expect(document.querySelectorAll('p').length).toBe(1)
    expect(screen.getByText(variant)).toHaveStyle(style)
  })

  it('does not throw for invalid variant', () => {
    render(<Typography variant={'' as 'p'}>{children}</Typography>)
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})

describe('with props.as and props.variant', () => {
  it('renders as h1 but styled using variant h6', () => {
    render(
      <Typography as="h1" variant="h6">
        {children}
      </Typography>,
    )
    // @ts-ignore
    expect(screen.getByRole('heading', { level: 1, name: children })).toBeInTheDocument()
  })
})
