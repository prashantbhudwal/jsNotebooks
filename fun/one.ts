// search (array, v)
// find if v is in the array

export default function linearSearch(
  haystack: number[],
  needle: number
): boolean {
  let pointer: number = 0;
  while (pointer < haystack.length) {
    if (haystack[pointer] === needle) return true;
    pointer++;
  }
  return false;
}

const testStack = [1, 2, 3, 4, 5];
const needle = 3;

const result = linearSearch(testStack, needle);

console.log(result);



// off by one problem 


