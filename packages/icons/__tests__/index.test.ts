import icons, { ArrowIcon as arrowIcon } from '../src/'
import ArrowIcon from '../src/ArrowIcon'

it('matches icons', () => {
  expect(icons).toMatchSnapshot()
})

it('matches arrow icon', () => {
  expect(icons.ArrowIcon).toBe(ArrowIcon)
  expect(arrowIcon).toBe(ArrowIcon)
})
