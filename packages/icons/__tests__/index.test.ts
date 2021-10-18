import icons, { ArrowIcon as arrowIcon, FilterIcon as filterIcon } from '../src/'
import ArrowIcon from '../src/ArrowIcon'
import FilterIcon from '../src/FilterIcon'

it('matches arrow icon', () => {
  expect(icons.ArrowIcon).toBe(ArrowIcon)
  expect(arrowIcon).toBe(ArrowIcon)
})

it('matches filter icon', () => {
  expect(icons.FilterIcon).toBe(FilterIcon)
  expect(filterIcon).toBe(FilterIcon)
})
