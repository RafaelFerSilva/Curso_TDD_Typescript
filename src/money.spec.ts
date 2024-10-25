import { Money } from "./money"

describe('Money', () => {
  it('should correctly handle dollar multiplication', async () => {
    const five: Money = Money.dollar(5)
    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy()
    expect(five.times(3).equals(Money.dollar(15))).toBeTruthy()
  })

  it('should correctly handle euro multiplication', async () => {
    const five: Money = Money.euro(5)
    expect(five.times(2).equals(Money.euro(10))).toBeTruthy()
    expect(five.times(3).equals(Money.euro(15))).toBeTruthy()
  })

  it('should correctly money equality', async () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()

    expect(Money.euro(5).equals(Money.euro(5))).toBeTruthy()
    expect(Money.euro(5).equals(Money.euro(6))).toBeFalsy()

    expect(Money.euro(5).equals(Money.dollar(5))).toBeFalsy()
  })
})