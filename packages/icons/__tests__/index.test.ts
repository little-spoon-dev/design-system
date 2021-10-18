import icons, { ArrowIcon as arrowIcon, CloseIcon as closeIcon, FilterIcon as filterIcon } from '../src/'
import ArrowIcon from '../src/ArrowIcon'
import CloseIcon from '../src/CloseIcon'
import FilterIcon from '../src/FilterIcon'

describe('arrow icon', () => {
  it('matches arrow icon', () => {
    expect(icons.ArrowIcon).toBe(ArrowIcon)
    expect(arrowIcon).toBe(ArrowIcon)
  })
})

describe('close icon', () => {
  it('matches close icon', () => {
    expect(icons.CloseIcon).toBe(CloseIcon)
    expect(closeIcon).toBe(CloseIcon)
  })
})

describe('filter icon', () => {
  it('matches filter icon', () => {
    expect(icons.FilterIcon).toBe(FilterIcon)
    expect(filterIcon).toBe(FilterIcon)
  })
})
