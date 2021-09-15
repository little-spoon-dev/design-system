import theme, { colors as themeColors } from '../src/'
import colors from '../src/colors'
import primary from '../src/colors/primary'
import { blue60 } from '../src/colors/primary'

it('matches theme', () => {
  expect(theme).toMatchSnapshot()
})

it('matches colors', () => {
  expect(theme.colors).toBe(colors)
  expect(themeColors).toBe(colors)
})

it('matches color primary', () => {
  expect(theme.colors.primary).toBe(primary)
})

it('matches color primary blue60', () => {
  expect(theme.colors.primary.primaryBlue.blue60).toBe(blue60)
  expect(blue60()).toBe('rgba(44,213,196,1)')
})
