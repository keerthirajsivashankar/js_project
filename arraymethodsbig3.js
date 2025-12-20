// Hey man! This is your Ultimate Array Method Cheat Sheet.
// Run this file to see exactly how these work.

console.log("===============================");
console.log("--- 1. THE BIG 3 (Map, Filter, Reduce) ---");
console.log("--- These DO NOT change the original array ---");
console.log("===============================");

const numbers = [1, 2, 3, 4, 5];

// A. MAP: Transforms every item
// Use case: "Convert a list of prices to a list of strings"
const doubled = numbers.map((num) => num * 2);
console.log("Original:", numbers);
console.log("Map (Doubled):", doubled); // [2, 4, 6, 8, 10]

// B. FILTER: Selects items based on a condition
// Use case: "Give me only the active users"
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Filter (Evens):", evens); // [2, 4]

// C. REDUCE: Boils the array down to ONE value
// Use case: "Sum all the numbers" or "Group data"
// reduce(callback(accumulator, current), initialValue)
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce (Sum):", sum); // 15

console.log("\n===============================");
console.log("--- 2. THE SEARCH PARTY ---");
console.log("===============================");

const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Sam" },
  { id: 3, name: "Jordan" },
];

// A. FIND: Returns the FIRST item that matches
const sam = users.find((user) => user.name === "Sam");
console.log("Find (Sam):", sam); // { id: 2, name: "Sam" }

// B. SOME: Returns TRUE if AT LEAST ONE matches
const hasJordan = users.some((user) => user.name === "Jordan");
console.log("Some (Has Jordan?):", hasJordan); // true

// C. EVERY: Returns TRUE only if ALL match
const allAreAlex = users.every((user) => user.name === "Alex");
console.log("Every (All Alex?):", allAreAlex); // false

// D. INCLUDES: Simple check for primitive values
const fruits = ["apple", "banana"];
console.log("Includes 'apple'?", fruits.includes("apple")); // true

console.log("\n===============================");
console.log("--- 3. THE MUTATORS (Danger Zone!) ---");
console.log("--- These CHANGE the original array ---");
console.log("===============================");

let stack = ["a", "b", "c"];

// A. PUSH: Add to END
stack.push("d");
console.log("Push 'd':", stack); // ['a', 'b', 'c', 'd']

// B. POP: Remove from END
const popped = stack.pop();
console.log("Popped:", popped); // 'd'

// C. UNSHIFT: Add to START
stack.unshift("z");
console.log("Unshift 'z':", stack); // ['z', 'a', 'b', 'c']

// D. SHIFT: Remove from START
stack.shift();
console.log("Shifted:", stack); // ['a', 'b', 'c']

// E. SPLICE: The Swiss Army Knife (Add/Remove anywhere)
// splice(startIndex, deleteCount, itemToAdd)
const months = ["Jan", "March", "April", "June"];
// "Go to index 1, delete 0, add 'Feb'"
months.splice(1, 0, "Feb");
console.log("Splice (Add Feb):", months);

// F. SORT: Reorders the array
// INTERVIEW GOTCHA: Default sort converts to strings!
// [1, 20, 3].sort() becomes [1, 20, 3] (Wrong!)
const messyNums = [10, 5, 100, 2];
messyNums.sort((a, b) => a - b); // Always provide a compare function
console.log("Sorted Nums:", messyNums); // [2, 5, 10, 100]

console.log("\n===============================");
console.log("--- 4. SLICE vs SPLICE (Interview Trap) ---");
console.log("===============================");

const original = ["ant", "bison", "camel", "duck", "elephant"];

// SPLICE: MUTATES the array (Changes original)
// SLICE: DOES NOT mutate (Returns a new copy)

// Slice: "Give me a copy from index 2 to 4"
const sliced = original.slice(2, 4);
console.log("Slice (2, 4):", sliced); // ['camel', 'duck']
console.log("Original is Safe:", original);

// Splice: "Go to index 2, remove 2 items"
const spliced = original.splice(2, 2);
console.log("Splice (Removed):", spliced); // ['camel', 'duck']
console.log("Original CHANGED:", original); // ['ant', 'bison', 'elephant']
