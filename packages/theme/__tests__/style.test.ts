import breakpoints from '../src/breakpoints'
import { getStyle } from '../src/style'

describe('getStyle', () => {
  it.each([{}, { sx: undefined }, { sx: null }, { foo: 'bar' }])(
    'returns empty style for %p',
    (style) => {
      expect(getStyle(style)).toEqual({})
    },
  )

  it('returns invalid style', () => {
    const sx = {
      foo: 'bar',
    }
    expect(getStyle({ sx })).toEqual(sx)
  })

  it('returns style', () => {
    const sx = {
      marginBottom: '1rem',
    }
    expect(getStyle({ sx })).toEqual(sx)
  })

  it('replaces breakpoint with media query', () => {
    const sx = {
      marginBottom: '1rem',
      mobile: {
        marginBottom: '1rem',
      },
    }
    expect(getStyle({ sx })).toMatchInlineSnapshot(`
      Object {
        "@media (min-width: 0px)": Object {
          "marginBottom": "1rem",
        },
        "marginBottom": "1rem",
      }
    `)
  })

  it('does not replace invalid breakpoint', () => {
    const sx = {
      up: {
        marginBottom: '1rem',
      },
    }
    expect(getStyle({ sx })).toEqual(sx)
  })

  it('returns style with multiple breakpoints', () => {
    expect(getStyle({ sx: { xs: { color: 'blue', height: 42 }, mobile: { border: 0 } } }))
      .toMatchInlineSnapshot(`
      Object {
        "@media (min-width: 0px)": Object {
          "border": 0,
        },
        "@media (min-width: 375px)": Object {
          "color": "blue",
          "height": 42,
        },
      }
    `)
  })

  it('replaces breakpoint once', () => {
    const sx = {
      tablet: {
        marginBottom: '1rem',
      },
      md: {
        marginBottom: '2rem',
      },
    }
    expect(getStyle({ sx })).toMatchInlineSnapshot(`
      Object {
        "@media (min-width: 768px)": Object {
          "marginBottom": "2rem",
        },
      }
    `)
  })

  it.each(Object.entries(breakpoints))('returns style for %p', (key) => {
    expect(getStyle({ sx: { [key]: { color: 'blue' } } })).toMatchSnapshot()
  })
})
