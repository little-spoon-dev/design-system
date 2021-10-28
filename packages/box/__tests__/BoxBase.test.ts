import { getStyle } from '../src/BoxBase'

describe('getStyle', () => {
  it('returns empty style', () => {
    expect(getStyle({ sx: undefined })).toEqual({})
    expect(getStyle({ sx: null })).toEqual({})
  })

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

  it('does not replace invalid breakpoint', () => {
    const sx = {
      up: {
        marginBottom: '1rem',
      },
    }
    expect(getStyle({ sx })).toEqual(sx)
  })
})
