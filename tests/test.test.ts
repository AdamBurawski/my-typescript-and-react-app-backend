import { getMyBodyTemp } from "../utils/foobar";
import { ChildRecord } from "../records/child.record";

// - toBe() - ===
// - to StrictEqual() - dokładne porównanie obietków
// - toBeNull(), toBeUndefined(), toBeDefined()
// - toBeTruthy, toBeFalsy()
// - toBeGratherThan(), toBeGratherTHanOrEqual(), toBeLessThan(), toBeLessThanOrEqual(),
// - toBeCloseTo() - zastosowanie z ułamkami
// - toMath(/RegExp/)
// - toContain() - dla tablic, itp
// - toThrow()

// test("test should give real values between 33 and 45 Celsius deg", () => {
//   expect(1 + 2).toBe(3);
// });

// test("Some test", () => {
//   expect(getMyBodyTemp()).toBeGreaterThanOrEqual(33);
//   expect(getMyBodyTemp()).toBeLessThanOrEqual(45);
// });

// test("Some test", () => {
//   expect(() => buildPerson()).toThrow();
// });

// function buildPerson(): any {
//   throw new Error("Function not implemented.");
// }

// test("Some test", () => {
//   expect("Ala ma kota, a kot ma alę").toMatch(/kot/);
// });

// test("Some test", () => {
//   expect([1, 2, 3]).toContain(2);
// });

// test("Some test", () => {
//   expect([1, 2, 3]).not.toContain(222);
// });

//************* Mocki */

let child: ChildRecord;

beforeAll(async () => {
  child = await ChildRecord.getOne("55555555");
});

const myMock = jest
  .spyOn(ChildRecord, "getOne")
  .mockImplementation(async (id: string) => {
    return new ChildRecord({
      id,
      name: " Testowy",
      giftId: "123",
    });
  });

test("Some test", async () => {
  const child = ChildRecord.getOne("123");

  console.log(child);

  expect(child).toBeDefined();
});

test("Some test", async () => {
  const child = ChildRecord.getOne("55555555");
  (await child).update();
});
