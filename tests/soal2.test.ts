import { twoSum } from "../src/soal2";

describe("twoSum", () => {
  test("mengembalikan indeks pasangan yang benar untuk target 9", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result.sort()).toEqual([0, 1]);
  });

  test("mengembalikan indeks pasangan yang benar untuk target 6", () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result.sort()).toEqual([1, 2]);
  });

  test("mengembalikan array kosong jika tidak ada pasangan", () => {
    const nums = [1, 2, 3];
    const target = 10;
    const result = twoSum(nums, target);
    expect(result).toEqual([]);
  });

  test("mengembalikan indeks unik walau ada angka duplikat", () => {
    const nums = [3, 3];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result.sort()).toEqual([0, 1]);
  });
});
