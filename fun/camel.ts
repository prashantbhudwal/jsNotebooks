export function toCamelCase(str: string): string {
  console.time();

  const withoutDashes = str
    .replaceAll("_", "-")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const camelCase =
    withoutDashes.charAt(0).toLowerCase() + withoutDashes.slice(1);

  console.timeEnd();

  return camelCase;
}

const test = toCamelCase(
  "what-are-you-doing-with-this-world-and-how-can-i-solve-it"
);
const test2 = toCamelCase("The_Stealth-Warrior");
const test3 = toCamelCase("the_stealth-warrior");

console.log(test);
console.log(test2);
console.log(test3);