import theme, { colors as themeColors, fonts as themeFonts } from '../src/'
import colors from '../src/colors'
import primaryColor from '../src/colors/primary'
import { blue60 } from '../src/colors/primary'
import fonts from '../src/fonts'
import primaryFont from '../src/fonts/primary'
import { family } from '../src/fonts/primary'

it('matches theme', () => {
  expect(theme).toMatchSnapshot()
})

describe('colors', () => {
  it('matches colors', () => {
    expect(theme.colors).toBe(colors)
    expect(themeColors).toBe(colors)
  })

  it('matches primary', () => {
    expect(theme.colors.primary).toBe(primaryColor)
  })

  it('matches blue60', () => {
    expect(theme.colors.primary.primaryBlue.blue60).toBe(blue60)
    expect(blue60()).toBe('rgba(0,227,205,1)')
  })
})

describe('fonts', () => {
  it('matches fonts', () => {
    expect(theme.fonts).toBe(fonts)
    expect(themeFonts).toBe(fonts)
  })

  it('matches primary', () => {
    expect(theme.fonts.primary).toBe(primaryFont)
  })

  it('matches family', () => {
    expect(theme.fonts.primary.family).toBe(family)
    expect(family).toBe('Lato, sans-serif')
  })
})
