import icons, { ArrowIcon as arrowIcon, CloseIcon as closeIcon } from '../src/'
import ArrowIcon from '../src/ArrowIcon'
import CloseIcon from '../src/CloseIcon'

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
