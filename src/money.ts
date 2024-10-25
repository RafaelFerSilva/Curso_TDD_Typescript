export class Money {
  public amount: number

  constructor(amount: number) {
    this.amount = amount;
  }

  equals(other: Money): boolean {
    if (this.constructor !== other.constructor) {
      return false
    }
    return this.amount === other.amount
  }
}
