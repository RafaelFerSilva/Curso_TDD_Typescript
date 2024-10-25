import { Dollar } from "./dollar"
import { Euro } from "./euro"

describe('Money', () => {
  it('should correctly handle dollar multiplication', async () => {
    const five: Dollar = new Dollar(5)
    expect(five.times(2).equals(new Dollar(10))).toBeTruthy()
    expect(five.times(3).equals(new Dollar(15))).toBeTruthy()
  })

  it('should correctly handle euro multiplication', async () => {
    const five: Euro = new Euro(5)
    expect(five.times(2).equals(new Euro(10))).toBeTruthy()
    expect(five.times(3).equals(new Euro(15))).toBeTruthy()
  })

  it('should correctly money equality', async () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()

    expect(new Euro(5).equals(new Euro(5))).toBeTruthy()
    expect(new Euro(5).equals(new Euro(6))).toBeFalsy()

    expect(new Euro(5).equals(new Dollar(5))).toBeFalsy()
  })
})