export class Distance {
  constructor(public value: number, public unit: string) {
    this.value = value;
    this.unit = unit;
  }

  toString() {
    return `${this.value} ${this.unit}`;
  }
}
