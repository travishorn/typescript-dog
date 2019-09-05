import { Dog } from "../src/Dog";

test("Dog barks", () => {
  const dog = new Dog();
  expect(dog.bark()).toBe("Woof! Woof!");
});
