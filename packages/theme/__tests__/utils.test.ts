import { rgb, rgbaMap } from '../src/utils'

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
