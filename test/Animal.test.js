import { Distance } from "../src/Distance";
import { Animal } from "../src/Animal";

test("Animal moves", () => {
  const animal = new Animal("Charlie");
  const tenMeters = new Distance(10, "meters");

  expect(animal.move(tenMeters)).toBe("Charlie moved 10 meters.");
});
