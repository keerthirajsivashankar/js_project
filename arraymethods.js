// Hey man! This is your JS Array Methods playground.
// Run this file to see what each method does.
// Pay close attention to the 'console.log' outputs
// and the comments about "MUTATES" vs. "NON-MUTATING".

console.log("--- 1. The 'Big 4' Iterators ---");

// ----------------------------------------
// forEach: Just loops, no return value
// ----------------------------------------
console.log("\n--- .forEach() ---");
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log(`forEach: Index ${index} is ${fruit}`);
});
// Note: 'forEach' returns 'undefined'. It's for side-effects.

// ----------------------------------------
// map: Creates a NEW array by transforming
// NON-MUTATING
// ----------------------------------------
console.log("\n--- .map() ---");
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => {
  return num * 2;
});
console.log("Original 'numbers':", numbers); // [1, 2, 3, 4]
console.log("New 'doubled' array:", doubled); // [2, 4, 6, 8]

// ----------------------------------------
// filter: Creates a NEW array with items that pass a test
// NON-MUTATING
// ----------------------------------------
console.log("\n--- .filter() ---");
const numbersToFilter = [1, 10, 5, 30, 7];
const over10 = numbersToFilter.filter((num) => {
  return num > 10; // The test: return true to keep, false to discard
});
console.log("Original 'numbersToFilter':", numbersToFilter); // [1, 10, 5, 30, 7]
console.log("New 'over10' array:", over10); // [30]

// ----------------------------------------
// reduce: "Reduces" the array to a single value
// NON-MUTATING
// ----------------------------------------
console.log("\n--- .reduce() ---");
const numbersToSum = [1, 2, 3, 4, 5];
const total = numbersToSum.reduce((accumulator, currentValue) => {
  // On first loop: accumulator is 0, currentValue is 1
  // On second loop: accumulator is 1, currentValue is 2
  // On third loop: accumulator is 3, currentValue is 3
  return accumulator + currentValue;
}, 0); // 0 is the starting value for the 'accumulator'
console.log("Original 'numbersToSum':", numbersToSum); // [1, 2, 3, 4, 5]
console.log("Reduced 'total':", total); // 15

console.log("\n\n--- 2. Finding & Checking ---");

// ----------------------------------------
// find: Returns the FIRST element that matches
// NON-MUTATING
// ----------------------------------------
console.log("\n--- .find() ---");
const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Beth" },
  { id: 3, name: "Chris" },
];
const user2 = users.find((user) => user.id === 2);
console.log("Found user:", user2); // { id: 2, name: 'Beth' }

// ----------------------------------------
// some: Checks if AT LEAST ONE element matches
// NON-MUTATING
// ----------------------------------------
console.log("\n--- .some() ---");
const hasEvenNumber = [1, 3, 5, 8].some((num) => num % 2 === 0);
console.log("Does [1, 3, 5, 8] have an even number?", hasEvenNumber); // true

// ----------------------------------------
// every: Checks if ALL elements match
// NON-MUTATING
// ----------------------------------------
console.log("\n--- .every() ---");
const allAreEven = [2, 4, 6, 8].every((num) => num % 2 === 0);
console.log("Are all in [2, 4, 6, 8] even?", allAreEven); // true
const notAllAreEven = [2, 4, 6, 7].every((num) => num % 2 === 0);
console.log("Are all in [2, 4, 6, 7] even?", notAllAreEven); // false

// ----------------------------------------
// includes: Simple check if a value exists
// NON-MUTATING
// ----------------------------------------
console.log("\n--- .includes() ---");
const pets = ["cat", "dog", "fish"];
console.log("Does ['cat', 'dog', 'fish'] include 'dog'?", pets.includes("dog")); // true
console.log(
  "Does ['cat', 'dog', 'fish'] include 'bird'?",
  pets.includes("bird")
); // false

console.log("\n\n--- 3. Adding & Removing (MUTATING!) ---");
console.log("--- These methods CHANGE the original array! ---");

// ----------------------------------------
// push: Adds to the END
// MUTATES
// ----------------------------------------
console.log("\n--- .push() ---");
const arrPush = ["a", "b"];
console.log("Original:", arrPush);
arrPush.push("c");
console.log("After .push('c'):", arrPush); // ['a', 'b', 'c']

// ----------------------------------------
// pop: Removes from the END
// MUTATES
// ----------------------------------------
console.log("\n--- .pop() ---");
const arrPop = ["a", "b", "c"];
console.log("Original:", arrPop);
const poppedItem = arrPop.pop();
console.log("Popped item:", poppedItem); // 'c'
console.log("After .pop():", arrPop); // ['a', 'b']

// ----------------------------------------
// unshift: Adds to the START
// MUTATES
// ----------------------------------------
console.log("\n--- .unshift() ---");
const arrUnshift = ["b", "c"];
console.log("Original:", arrUnshift);
arrUnshift.unshift("a");
console.log("After .unshift('a'):", arrUnshift); // ['a', 'b', 'c']

// ----------------------------------------
// shift: Removes from the START
// MUTATES
// ----------------------------------------
console.log("\n--- .shift() ---");
const arrShift = ["a", "b", "c"];
console.log("Original:", arrShift);
const shiftedItem = arrShift.shift();
console.log("Shifted item:", shiftedItem); // 'a'
console.log("After .shift():", arrShift); // ['b', 'c']

// ----------------------------------------
// splice: The all-in-one 'surgery' tool
// MUTATES
// ----------------------------------------
console.log("\n--- .splice() ---");
const arrSplice = ["apple", "banana", "cherry", "date"];
console.log("Original:", arrSplice);
// Let's remove 'cherry' (at index 2, remove 1 item)
const deletedItems = arrSplice.splice(2, 1);
console.log("Deleted items:", deletedItems); // ['cherry']
console.log("After .splice(2, 1):", arrSplice); // ['apple', 'banana', 'date']
// Now, let's remove 'banana' (index 1) and add 'mango' and 'kiwi'
arrSplice.splice(1, 1, "mango", "kiwi");
console.log("After .splice(1, 1, 'mango', 'kiwi'):", arrSplice); // ['apple', 'mango', 'kiwi', 'date']

console.log("\n\n--- 4. Creating New Arrays (NON-MUTATING) ---");

// ----------------------------------------
// slice: Creates a shallow copy of a part of the array
// NON-MUTATING
// ----------------------------------------
console.log("\n--- .slice() ---");
const arrSlice = ["a", "b", "c", "d", "e"];
console.log("Original:", arrSlice);
const newSlice = arrSlice.slice(1, 4); // from index 1 up to (not including) 4
console.log("New .slice(1, 4) array:", newSlice); // ['b', 'c', 'd']
console.log("Original is unchanged:", arrSlice); // ['a', 'b', 'c', 'd', 'e']
// Pro-tip: Copy an array with .slice()
const arrCopy = arrSlice.slice();
console.log("Full copy:", arrCopy);

// ----------------------------------------
// concat: Joins two arrays
// NON-MUTATING
// ----------------------------------------
console.log("\n--- .concat() ---");
const arr1 = ["a", "b"];
const arr2 = ["c", "d"];
const combined = arr1.concat(arr2);
console.log("Original arr1:", arr1); // ['a', 'b']
console.log("Original arr2:", arr2); // ['c', 'd']
console.log("New 'combined' array:", combined); // ['a', 'b', 'c', 'd']
// Modern way (Spread operator):
const spreadCombined = [...arr1, ...arr2];
console.log("Combined with spread '...':", spreadCombined);

console.log("\n\n--- 5. Other Essential Methods ---");

// ----------------------------------------
// sort: Sorts an array
// MUTATES! And has a big "gotcha"!
// ----------------------------------------
console.log("\n--- .sort() ---");
const unsortedNums = [1, 10, 5, 2, 20];
console.log("Original numbers:", unsortedNums);
// The "GOTCHA" - default sort is as STRINGS
unsortedNums.sort();
console.log("After default .sort() (WRONG!):", unsortedNums); // [1, 10, 2, 20, 5]
// The FIX: Provide a 'compare' function
const correctSort = [1, 10, 5, 2, 20];
correctSort.sort((a, b) => a - b); // For ascending order
console.log("After correct .sort((a, b) => a - b):", correctSort); // [1, 2, 5, 10, 20]
console.log("And it MUTATED the array:", correctSort);

// ----------------------------------------
// join: Creates a string from an array
// NON-MUTATING
// ----------------------------------------
console.log("\n--- .join() ---");
const words = ["Hello", "my", "name", "is", "Gemini"];
console.log("Original words:", words);
const sentence = words.join(" "); // Use a space as the separator
console.log("Joined string:", sentence); // "Hello my name is Gemini"

// ----------------------------------------
// at: Gets an item by index, supports negative indexes!
// NON-MUTATING
// ----------------------------------------
console.log("\n--- .at() ---");
const arrAt = ["a", "b", "c", "d"];
console.log("Item at index 1:", arrAt.at(1)); // 'b'
// The superpower:
console.log("Item at index -1 (last item):", arrAt.at(-1)); // 'd'
console.log("Item at index -2 (second to last):", arrAt.at(-2)); // 'c'
// Old way for last item:
console.log("Old way for last item:", arrAt[arrAt.length - 1]); // 'd'
