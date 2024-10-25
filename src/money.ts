export class Money {
  public amount: number

  constructor(amount: number) {
    this.amount = amount;
  }

  equals(other: Money): boolean {
    return this.amount === other.amount
  }
}
