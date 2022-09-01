import zIndex from '../src/z-index'

describe('zIndex', () => {
  it('gets values in enum', () => {
    expect(zIndex.backdrop).toBe(1100)
    expect(zIndex.drawer).toBe(1200)
  })
})
