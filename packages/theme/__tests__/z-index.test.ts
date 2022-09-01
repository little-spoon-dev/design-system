import ZIndex from '../src/z-index'

describe('ZIndex', () => {
  it('gets values in enum', () => {
    expect(ZIndex.backdrop).toBe(1100)
    expect(ZIndex.drawer).toBe(1200)
  })
})
