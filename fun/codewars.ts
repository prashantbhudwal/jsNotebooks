export const digitalRoot = (n: number): number => {
  function sumOfDigits(n: number): number {
    if (n.toString().length === 1) return n;
    const sum = n
      .toString()
      .split("")
      .map((item) => Number(item))
      .reduce((acc, currentValue) => acc + currentValue);
    return sumOfDigits(sum);
  }

  return sumOfDigits(n);
};

export class Kata {
  static getCount(str: string): number {
    const vowels = ["a", "e", "i", "o", "u"];

    const foundVowels = str.split("").filter((char) => vowels.includes(char));

    return foundVowels.length;
  }
}

export function countBits(n: number): number {
  const bitsArray = n.toString(2).split("");
  const oneBits = bitsArray.reduce((acc, curr) => {
    return curr === "1" ? acc + 1 : acc;
  }, 0);

  return oneBits;
}

export function filter_list(l: Array<any>): Array<number> {
  return l.filter((item) => typeof item !== "string");
}

export function duplicateEncode(word: string) {
  const lowerCaseWordArray = word.toLowerCase().split("");

  const finalArray = lowerCaseWordArray.map((currentLetter) => {
    return lowerCaseWordArray.filter((letter) => letter === currentLetter)
      .length > 1
      ? ")"
      : "(";
  });

  return finalArray.join("");
}

export function binaryArrayToNumber(arr: number[]): number {
  const string = arr.join("");
  return parseInt(string, 2);
}

binaryArrayToNumber([0, 0, 1, 0]);
