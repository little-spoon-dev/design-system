import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Typography, { type TypographyProps, type VariantString } from '../src'
import {
  CAPTION_TYPE,
  DISPLAY_TYPE,
  HEADING_TYPE,
  PARAGRAPH,
  PARAGRAPH_TYPE,
} from '../src/constants'

const children = 'children'
const label = 'label'
const testId = 'typography'

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
  it.each<Required<TypographyProps>['as']>([PARAGRAPH, ...Object.values(HEADING_TYPE)])(
    'renders as %j',
    (element) => {
      render(<Typography as={element}>{element}</Typography>)
      if (element[0] === 'h' && Number(element[1]) <= 6) {
        expect(
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
    expect(screen.getByText(children)).toHaveStyle({ marginBottom: '0.8rem' })
  })

  it('renders paragraph with no margin-bottom', () => {
    render(<Typography noMargin>{children}</Typography>)
    expect(screen.getByText(children)).toHaveStyle({ margin: '0 0 0 0' })
  })
})

describe('with props.variant as string', () => {
  it.each<[Required<TypographyProps>['variant'], string]>([
    [DISPLAY_TYPE.DISPLAY1, 'font: Mulish,sans-serif 7.4rem 700 7.4rem'],
    [DISPLAY_TYPE.DISPLAY2, 'font: Mulish,sans-serif 6.6rem 700 6.6rem'],
    [HEADING_TYPE.H1, 'font: Mulish,sans-serif 5.2rem 700 5.2rem'],
    [HEADING_TYPE.H2, 'font: Mulish,sans-serif 4.6rem 700 4.6rem'],
    [HEADING_TYPE.H3, 'font: Mulish,sans-serif 3.6rem 700 3.6rem'],
    [HEADING_TYPE.H4, 'font: Mulish,sans-serif 2.9rem 700 2.9rem'],
    [HEADING_TYPE.H5, 'font: Mulish,sans-serif 2.6rem 700 2.6rem'],
    [HEADING_TYPE.H6, 'font: Mulish,sans-serif 2rem 700 2rem'],
    [HEADING_TYPE.H7, 'font: Mulish,sans-serif 1.8rem 700 1.8rem'],
    [PARAGRAPH, 'font: Lato,sans-serif 1.6rem 400 1.6rem'],
    [PARAGRAPH_TYPE.P0, 'font: Lato,sans-serif 2.4rem 400 2.4rem'],
    [PARAGRAPH_TYPE.P1, 'font: Lato,sans-serif 2rem 400 2rem'],
    [PARAGRAPH_TYPE.P2, 'font: Lato,sans-serif 1.8rem 400 1.8rem'],
    [PARAGRAPH_TYPE.P3, 'font: Lato,sans-serif 1.6rem 400 1.6rem'],
    [PARAGRAPH_TYPE.P4, 'font: Lato,sans-serif 1.4rem 400 1.4rem'],
    [CAPTION_TYPE.CAPTION1, 'font: Lato,sans-serif 1.2rem 400 1.2rem'],
  ])('renders p with variant=%j', (variant, style) => {
    const variantText = typeof variant === 'string' ? variant : variant[0]
    render(<Typography variant={variant}>{variantText}</Typography>)
    expect(document.querySelectorAll('p').length).toBe(1)
    expect(screen.getByText(variantText)).toHaveStyle(style)
  })

  it('does not throw for invalid variant', () => {
    render(<Typography variant={'' as 'p'}>{children}</Typography>)
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})

describe('with props.variant as string, props.uppercase and props.bold', () => {
  it.each<
    [
      variant: VariantString,
      bold: boolean | undefined,
      uppercase: boolean | undefined,
      expectedStyle: string,
    ]
  >([
    [PARAGRAPH_TYPE.P1, undefined, undefined, 'letter-spacing: normal'],
    [PARAGRAPH_TYPE.P1, false, false, 'letter-spacing: normal'],
    [PARAGRAPH_TYPE.P1, true, false, 'letter-spacing: normal'],
    [PARAGRAPH_TYPE.P1, true, undefined, 'letter-spacing: normal'],
    [PARAGRAPH_TYPE.P1, false, true, 'letter-spacing: 0.05rem'],
    [PARAGRAPH_TYPE.P1, undefined, true, 'letter-spacing: 0.05rem'],
    [PARAGRAPH_TYPE.P1, true, true, 'letter-spacing: 0.1rem'],

    [CAPTION_TYPE.CAPTION1, undefined, undefined, 'letter-spacing: normal'],
    [CAPTION_TYPE.CAPTION1, false, false, 'letter-spacing: normal'],
    [CAPTION_TYPE.CAPTION1, true, false, 'letter-spacing: normal'],
    [CAPTION_TYPE.CAPTION1, true, undefined, 'letter-spacing: normal'],
    [CAPTION_TYPE.CAPTION1, false, true, 'letter-spacing: normal'],
    [CAPTION_TYPE.CAPTION1, undefined, true, 'letter-spacing: normal'],
    [CAPTION_TYPE.CAPTION1, true, true, 'letter-spacing: 0.05rem'],

    [HEADING_TYPE.H1, undefined, undefined, 'letter-spacing: normal'],
    [HEADING_TYPE.H1, false, false, 'letter-spacing: normal'],
    [HEADING_TYPE.H1, true, false, 'letter-spacing: normal'],
    [HEADING_TYPE.H1, true, undefined, 'letter-spacing: normal'],
    [HEADING_TYPE.H1, false, true, 'letter-spacing: normal'],
    [HEADING_TYPE.H1, undefined, true, 'letter-spacing: normal'],
    [HEADING_TYPE.H1, true, true, 'letter-spacing: normal'],
  ])(
    'have proper letter-spacing with variant=%j bold=%j uppercase=%j',
    (variant, bold, uppercase, expectedStyle) => {
      render(
        <Typography data-testid={testId} bold={bold} uppercase={uppercase} variant={variant}>
          {children}
        </Typography>,
      )
      expect(document.querySelectorAll('p').length).toBe(1)
      expect(screen.getByTestId(testId)).toHaveStyle(expectedStyle)
    },
  )
})

describe('with props.variant as object', () => {
  it('have proper styles for variant with breakpoints', () => {
    const text = 'Variant by breakpoint test desktop'
    render(
      <Typography
        variant={{
          0: PARAGRAPH_TYPE.P4,
          1500: PARAGRAPH_TYPE.P2,
        }}
      >
        {text}
      </Typography>,
    )

    expect(document.querySelectorAll('p').length).toBe(1)
    expect(screen.getByText(text)).toHaveStyle({
      fontFamily: 'Lato,sans-serif',
      fontSize: '1.4rem',
      lineHeight: '2rem',
    })
  })
})

describe('with props.as and props.variant', () => {
  it('renders as h1 but styled using variant h6', () => {
    render(
      <Typography as={HEADING_TYPE.H1} variant={HEADING_TYPE.H6}>
        {children}
      </Typography>,
    )
    expect(screen.getByRole('heading', { level: 1, name: children })).toBeInTheDocument()
  })
})

describe('with props.bold', () => {
  it('renders strong with font-weight', () => {
    render(<Typography bold>{children}</Typography>)
    const element = screen.getByText(children)
    expect(element.tagName).toBe('STRONG')
    expect(element).toHaveStyle({ fontWeight: 700 })
    expect(element.parentElement!.tagName).toBe('P')
  })
})

describe('with props.extraBold', () => {
  it('renders strong with font-weight', () => {
    render(
      <Typography as={HEADING_TYPE.H1} extraBold>
        {children}
      </Typography>,
    )
    const element = screen.getByText(children)
    expect(element.tagName).toBe('STRONG')
    expect(element).toHaveStyle({ fontWeight: 800 })
    expect(element.parentElement!.tagName).toBe('H1')
  })
})

describe('with props.black', () => {
  it('renders strong with font-weight', () => {
    render(
      <Typography as={HEADING_TYPE.H2} variant={DISPLAY_TYPE.DISPLAY1} black>
        {children}
      </Typography>,
    )
    const element = screen.getByText(children)
    expect(element.tagName).toBe('STRONG')
    expect(element).toHaveStyle({ fontWeight: 900 })
    expect(element.parentElement!.tagName).toBe('H2')
  })
})

describe('with props.bold, props.extraBold, props.black', () => {
  it('renders strong with biggest font-weight', () => {
    render(
      <Typography bold extraBold black>
        {children}
      </Typography>,
    )
    const element = screen.getByText(children)
    expect(element.tagName).toBe('STRONG')
    expect(element).toHaveStyle({ fontWeight: 900 })
    expect(element.parentElement!.tagName).toBe('P')
  })
})

describe('with props.uppercase', () => {
  it('transforms text into uppercase', () => {
    render(<Typography uppercase>{children}</Typography>)
    expect(screen.getByText(children)).toHaveStyle({ textTransform: 'uppercase' })
  })
})

describe('with props.center', () => {
  it('aligns text to center', () => {
    render(<Typography center>{children}</Typography>)
    expect(screen.getByText(children)).toHaveStyle({ textAlign: 'center' })
  })
})
