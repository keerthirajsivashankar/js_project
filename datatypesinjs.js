// Hey man! This is your "Toolbox" for Data Structures.
// Knowing WHEN to use a Map vs an Array is a guaranteed interview question.

console.log("===============================");
console.log("--- 1. THE LIST (Array) ---");
console.log("===============================");
// USE WHEN: Order matters, and you need fast access by INDEX.
// BIG O: Access O(1), Search O(N), Shift/Unshift O(N).

const list = [10, 20, 30, 40];

// Fast Access (Index)
console.log("Index 2:", list[2]); // 30

// Slow Operation (Shift)
// Why? Because index 1 must become 0, index 2 become 1, etc.
// The computer has to move every single item in memory.
list.shift();
console.log("After Shift:", list); // [20, 30, 40]

console.log("\n===============================");
console.log("--- 2. THE DICTIONARY (Map vs Object) ---");
console.log("===============================");
// USE WHEN: You have Key-Value pairs and need fast lookups.
// BIG O: Access/Insert/Delete is O(1) (Average).

// --- A. THE OBJECT (The Old Way) ---
// Limitation 1: Keys are ALWAYS strings.
// Limitation 2: It has "garbage" properties from prototype (toString, etc).
const objDict = {
  1: "User One",
  true: "User True",
};
console.log("Obj Key '1' type:", typeof Object.keys(objDict)[0]); // "string" (converted!)

// --- B. THE MAP (The Pro Way) ---
// Feature 1: Keys can be ANYTHING (Objects, Functions, Numbers).
// Feature 2: Remembers insertion order.
// Feature 3: Has a .size property (Objects don't).

const mapDict = new Map();
const keyObj = { id: 1 };

mapDict.set(keyObj, "Metadata for Object"); // Object as Key!
mapDict.set(true, "Boolean Key");

console.log("Map Get:", mapDict.get(keyObj));
console.log("Map Size:", mapDict.size);

// ITERATION (Maps are Linear/Iterable!)
console.log("--- Looping Map ---");
for (const [key, value] of mapDict) {
  console.log(key, "=>", value);
}

console.log("\n===============================");
console.log("--- 3. THE SET (Unique List) ---");
console.log("===============================");
// USE WHEN: You need a list of UNIQUE items and fast checks ("Is this ID banned?").
// BIG O: .has() is O(1). Array.includes() is O(N).

const uniqueIds = new Set();

uniqueIds.add(101);
uniqueIds.add(102);
uniqueIds.add(101); // Duplicate ignored!

console.log("Set:", uniqueIds); // { 101, 102 }

// THE INTERVIEW WINNER:
// "How do I check if 'x' exists in a list of 1 million items?"
// Array: Slow. Checks 1 by 1.
// Set: Instant. Hashes the value and finds it.
console.log("Fast Check:", uniqueIds.has(101)); // true

console.log("\n===============================");
console.log("--- 4. THE TUPLE (Simulated) ---");
console.log("===============================");
// USE WHEN: You want a fixed-length, IMMUTABLE list of related values.
// Example: Coordinates [x, y], RGB [r, g, b].
// JS doesn't have "Tuple", so we freeze an Array.

function getCoordinates() {
  const tuple = [12.5, 55.2];
  return Object.freeze(tuple); // Freezing makes it read-only
}

const coords = getCoordinates();
console.log("Tuple:", coords);

// coords[0] = 99.9; // ❌ Error (in strict mode) or Silent Fail
console.log("Tuple stays safe:", coords[0]); // 12.5
