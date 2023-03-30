import breakpoints, {
  desktop,
  down,
  maxWidth,
  minWidth,
  mobile,
  tablet,
  up,
} from '../src/breakpoints'

describe('breakpoints', () => {
  it('returns breakpoints', () => {
    expect(breakpoints).toMatchInlineSnapshot(`
      {
        "desktop": 1000,
        "down": [Function],
        "lg": 1000,
        "md": 768,
        "mobile": 0,
        "sm": 550,
        "tablet": 768,
        "up": [Function],
        "minWidth": [Function],
        "maxWidth": [Function],
        "xl": 1200,
        "xs": 375,
        "xxl": 1440,
      }
    `)
  })

  it('matches mobile breakpoint', () => {
    expect(breakpoints.mobile).toBe(mobile)
  })

  it('matches tablet breakpoint', () => {
    expect(breakpoints.tablet).toBe(tablet)
    expect(breakpoints.md).toBe(tablet)
  })

  it('matches desktop breakpoint', () => {
    expect(breakpoints.desktop).toBe(desktop)
    expect(breakpoints.lg).toBe(desktop)
  })
})

describe('up', () => {
  it('generates media query', () => {
    expect(up(mobile)).toMatchInlineSnapshot(`"@media (min-width: 0px)"`)
  })

  it('generates media query with css', () => {
    expect(up(mobile, 'font-size: 42rem;')).toMatchInlineSnapshot(
      `"@media (min-width: 0px) { font-size: 42rem; }"`,
    )
  })
})

describe('minWidth', () => {
  it('generates media query', () => {
    expect(minWidth(mobile)).toMatchInlineSnapshot(`"@media (min-width: 0px)"`)
  })

  it('generates media query with css', () => {
    expect(minWidth(mobile, 'font-size: 42rem;')).toMatchInlineSnapshot(
      `"@media (min-width: 0px) { font-size: 42rem; }"`,
    )
  })
})

describe('down', () => {
  it('generates media query', () => {
    expect(down(desktop)).toMatchInlineSnapshot(`"@media (max-width: 1000px)"`)
  })

  it('generates media query with css', () => {
    expect(down(desktop, 'display: none;')).toMatchInlineSnapshot(
      `"@media (max-width: 1000px) { display: none; }"`,
    )
  })
})

describe('maxWidth', () => {
  it('generates media query', () => {
    expect(maxWidth(desktop)).toMatchInlineSnapshot(`"@media (max-width: 1000px)"`)
  })

  it('generates media query with css', () => {
    expect(maxWidth(desktop, 'display: none;')).toMatchInlineSnapshot(
      `"@media (max-width: 1000px) { display: none; }"`,
    )
  })
})
