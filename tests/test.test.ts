import { getMyBodyTemp } from "../utils/foobar";

test("test should give real values between 33 and 45 Celsius deg", () => {
  expect(1 + 2).toBe(3);
});

test("jakiś test", () => {
  expect(getMyBodyTemp()).toBeGreaterThanOrEqual(33);
  expect(getMyBodyTemp()).toBeLessThanOrEqual(45);
});

test("jakiś test", () => {
  expect("Ala ma kota, a kot ma alę").toMatch(/kot/);
});

test("jakiś test", () => {
  expect([1, 2, 3]).toContain(2);
});

/*

- toBe() - ===
- to StrictEqual() - dokładne porównanie obietków
- toBeNull(), toBeUndefined(), toBeDefined()
- toBeTruthy, toBeFalsy()
- toBeGratherThan(), toBeGratherTHanOrEqual(), toBeLessThan(), toBeLessThanOrEqual(), 
- toBeCloseTo() - zastosowanie z ułamkami

- toMath(/RegExp/)
- toContain() - dla tablic, itp
- toThrow()
*/
