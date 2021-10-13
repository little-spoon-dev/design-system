import { fontFamily, rem, remMap, rgb, rgbaMap } from '../src/utils'

describe('fontFamily', () => {
  it('returns font-family', () => {
    expect(fontFamily('Mulish')).toBe('Mulish, sans-serif')
    expect(fontFamily('Lato')).toBe('Lato, sans-serif')
  })
})

describe('rem', () => {
  it('memoizes rem', () => {
    expect(rem(3.14)).toBe('3.14rem')
    expect(remMap).toEqual({
      '3.14': '3.14rem',
    })
  })

  it('returns rem', () => {
    expect(rem(1)).toBe('1rem')
    expect(rem(0.5)).toBe('0.5rem')
  })
})

describe('rgb', () => {
  it('memoizes RGBA', () => {
    const rgba = rgb(1, 2, 3)
    expect(rgba()).toBe('rgba(1,2,3,1)')
    expect(rgbaMap).toEqual({
      '1,2,3,1': 'rgba(1,2,3,1)',
    })
    expect(rgba(1)).toBe('rgba(1,2,3,1)')
  })

  it('returns a curried function', () => {
    expect(rgb(0, 0, 0)).toBeInstanceOf(Function)
  })

  it('generates RGBA with default alpha', () => {
    const rgba = rgb(4, 3, 2)
    expect(rgba()).toBe('rgba(4,3,2,1)')
  })

  it('generates RGBA with alpha', () => {
    const rgba = rgb(1, 2, 3)
    expect(rgba(0.5)).toBe('rgba(1,2,3,0.5)')
  })
})
