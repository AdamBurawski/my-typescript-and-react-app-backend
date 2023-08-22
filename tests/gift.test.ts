import { GiftRecord } from "../records/gift.record";
import { pool } from "../utils/db";

// - toBe() - ===
// - to StrictEqual() - dokładne porównanie obietków
// - toBeNull(), toBeUndefined(), toBeDefined()
// - toBeTruthy, toBeFalsy()
// - toBeGratherThan(), toBeGratherTHanOrEqual(), toBeLessThan(), toBeLessThanOrEqual(),
// - toBeCloseTo() - zastosowanie z ułamkami
// - toMath(/RegExp/)
// - toContain() - dla tablic, itp
// - toThrow()

let gift: GiftRecord;

beforeAll(async () => {
  gift = new GiftRecord({
    name: "Tester",
    count: 123,
  });
});

afterAll(async () => {
  await pool.end();
});

test("Not inserted ChildRecord should have no id", async () => {
  const gift = new GiftRecord({
    name: "Tester",
    count: 123,
  });

  expect(gift.id).toBeUndefined();
});

test("Inserted ChildRecord should have an id", async () => {
  const gift = new GiftRecord({
    name: "Tester",
    count: 123,
  });

  await gift.insert();

  expect(gift.id).toBeDefined();
  expect(gift.id).toMatch(
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
  );
});
