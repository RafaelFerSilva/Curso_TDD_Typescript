import { Dollar } from "./dollar"

describe('Dollar', () => {
  it('should return 10 when five dollar are multiplied by two', async () => {
    const five: Dollar = new Dollar(5)
    let products: Dollar = five.times(2)
    expect(products.amount).toEqual(10)
    products = five.times(3)
    expect(products.amount).toEqual(15)
  })

  it('should return true when dollars are the same value are compared', async () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
  })
})