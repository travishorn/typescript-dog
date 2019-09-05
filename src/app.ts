import { Distance } from "./Distance";
import { Dog } from "./Dog";

const dog = new Dog("Charlie");
const tenMeters = new Distance(10, "meters");

console.log(dog.move(tenMeters));
console.log(dog.bark());
