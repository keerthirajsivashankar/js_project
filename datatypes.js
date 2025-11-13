// Hey man! This is your playground for data structures in JS.
// Run this file in your console or with Node.js.

console.log("===============================");
console.log("--- 1. Array ---");
console.log("===============================");
// The standard, ordered, changeable list. Can have duplicates.
let fruits = ["apple", "banana", "apple", "orange"];
console.log("Original Array:", fruits);

// --- Common Methods ---
// Add to end
fruits.push("grape");
console.log("After .push('grape'):", fruits);

// Remove from end
let lastFruit = fruits.pop();
console.log("Popped item:", lastFruit);
console.log("After .pop():", fruits);

// Get by index
console.log("Item at index 1:", fruits[1]); // 'banana'

// Get length
console.log("Length:", fruits.length);

// Loop
fruits.forEach((fruit) => {
  console.log(`Array.forEach: ${fruit}`);
});
// (See our 'array_methods.js' file for the FULL list!)

console.log("\n===============================");
console.log("--- 2. Set (This is JS's 'HashSet') ---");
console.log("===============================");
// A collection of *UNIQUE* values. No duplicates allowed.
// This IS the "HashSet" you're asking about. It's implemented
// for fast add, delete, and 'has' checks (O(1) on average).
//

// Create from an array (auto-removes duplicates!)
let mySet = new Set(["apple", "banana", "apple", "orange"]);
console.log("Set from array:", mySet); // {'apple', 'banana', 'orange'}

// --- Common Methods ---

// Add a new item
mySet.add("kiwi");
console.log("After .add('kiwi'):", mySet);

// Add a duplicate (it does nothing)
mySet.add("apple");
console.log("After .add('apple') again:", mySet);

// Check if an item exists
console.log("Set .has('banana'):", mySet.has("banana")); // true
console.log("Set .has('grape'):", mySet.has("grape")); // false

// Delete an item
mySet.delete("orange");
console.log("After .delete('orange'):", mySet);

// Get size
console.log("Set .size:", mySet.size); // (it's a property, not a method)

// Loop
mySet.forEach((value) => {
  console.log(`Set.forEach: ${value}`);
});

console.log("\n===============================");
console.log("--- 3. Map (The cousin of Set) ---");
console.log("===============================");
// You didn't ask for this, but it's related and super important.
// A Set stores unique *values*.
// A Map stores *key-value pairs* (like an Object).
// It's like a 'HashSet' for key-value data.
//

let myMap = new Map();

// --- Common Methods ---

// Add a key-value pair
myMap.set("name", "Alex");
myMap.set("age", 30);
// Keys can be any type, even objects!
let id = { a: 1 };
myMap.set(id, "user_alex");

console.log("Map:", myMap);

// Get a value by key
console.log("Map .get('name'):", myMap.get("name")); // 'Alex'

// Check if a key exists
console.log("Map .has('age'):", myMap.has("age")); // true

// Delete by key
myMap.delete("age");
console.log("After .delete('age'):", myMap);

// Get size
console.log("Map .size:", myMap.size);

// Loop
myMap.forEach((value, key) => {
  console.log(`Map.forEach: ${key} -> ${value}`);
});

console.log("\n===============================");
console.log("--- 4. Tuple (The JS Workaround) ---");
console.log("===============================");
// IMPORTANT: JavaScript does NOT have a built-in 'Tuple' type.
// A tuple is a list that is *immutable* (cannot be changed)
// and often has a *fixed size*.

// WORKAROUND: We use an Array and make it read-only.
// The best way is with `Object.freeze()`

const myTuple = Object.freeze(["Alex", 30, "Developer"]);

console.log("Our 'Tuple':", myTuple);

// --- Methods (or lack of them) ---

// Access by index
console.log("Tuple item at 0:", myTuple[0]); // 'Alex'

// Get length
console.log("Tuple length:", myTuple.length);

// Now, let's TRY to change it (this will fail)
console.log("\nTrying to mutate (change) the 'tuple'...");

try {
  myTuple[0] = "Bob"; // This will fail (silently in non-strict mode)
  console.log("After trying to change [0]:", myTuple);
} catch (e) {
  console.log("ERROR changing value:", e.message);
}

try {
  myTuple.push("Manager"); // This will fail
  console.log("After trying to .push():", myTuple);
} catch (e) {
  console.log("ERROR pushing value:", e.message);
}

console.log("The 'tuple' remains unchanged:", myTuple);
