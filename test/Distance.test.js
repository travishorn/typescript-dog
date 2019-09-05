import { Distance } from "../src/Distance";

test("Distance outputs a string", () => {
  const distance = new Distance(10, "meters");
  expect(distance.toString()).toBe("10 meters");
});
