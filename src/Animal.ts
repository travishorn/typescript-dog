import { Distance } from "./Distance";

export class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: Distance) {
    return `${this.name} moved ${distance.toString()}.`;
  }
}
