import { groupAnagrams } from "../src/soal1";

const normalize = (arr: string[][]) =>
  arr.map((g) => [...g].sort().join(",")).sort();

describe("groupAnagrams", () => {
  test("mengelompokkan anagram sesuai contoh", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const out = groupAnagrams(input);
    expect(normalize(out)).toEqual(
      normalize([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]])
    );
  });

  test("Input kosong maka hasil kosong", () => {
    expect(groupAnagrams([])).toEqual([]);
  });

  test("Kata unik jadi grup sendiri", () => {
    const out = groupAnagrams(["hello"]);
    expect(out).toEqual([["hello"]]);
  });

  test("Case berbeda dianggap beda grup", () => {
    const out = groupAnagrams(["ab", "BA"]);
    // "ab" -> "ab", "BA" -> "AB" (berbeda)
    expect(normalize(out)).toEqual(normalize([["ab"], ["BA"]]));
  });
});
