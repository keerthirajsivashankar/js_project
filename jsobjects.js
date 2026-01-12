// Hey man! This is your cheat sheet for Objects.
// It covers HOW to make them and HOW to manipulate them.

console.log("========================================");
console.log("--- 1. WAYS TO CREATE OBJECTS ---");
console.log("========================================");

// A. Object Literal (The Standard - 95% usage)
// Fast, clean, easy.
const literalObj = {
  name: "Alex",
  role: "Dev",
  greet() {
    return "Hi!";
  },
};
console.log("1. Literal:", literalObj);

// B. The 'new' Keyword (Constructor Function)
// Old school way to make blueprints (before Classes).
function UserConstructor(name) {
  this.name = name;
  this.isAdmin = false;
}
const constructedObj = new UserConstructor("Sam");
console.log("2. Constructor:", constructedObj);

// C. ES6 Classes (Modern Blueprint)
// Syntactic sugar over Constructors. Cleaner syntax.
class UserClass {
  constructor(name) {
    this.name = name;
  }
}
const classObj = new UserClass("Jordan");
console.log("3. Class Instance:", classObj);

// D. Object.create() (Pure Inheritance)
// Creates an empty object with a specific parent (prototype).
const prototypeObj = { planet: "Earth" };
const inheritedObj = Object.create(prototypeObj);
inheritedObj.city = "New York";
console.log("4. Object.create (Own props):", inheritedObj);
console.log("   Inherited prop:", inheritedObj.planet); // "Earth"

console.log("\n========================================");
console.log("--- 2. ESSENTIAL STATIC METHODS ---");
console.log("========================================");

const car = {
  make: "Tesla",
  model: "Model 3",
  year: 2023,
};

// A. Getting Keys, Values, and Pairs
// Crucial for looping!
console.log("A. Keys:", Object.keys(car)); // ['make', 'model', 'year']
console.log("B. Values:", Object.values(car)); // ['Tesla', 'Model 3', 2023]
console.log("C. Entries:", Object.entries(car)); // [['make','Tesla'], ...]

// B. Transforming a list BACK into an object
const pairs = [
  ["name", "Alice"],
  ["age", 25],
];
const fromEntries = Object.fromEntries(pairs);
console.log("D. fromEntries:", fromEntries); // { name: 'Alice', age: 25 }

// C. Merging Objects
const target = { a: 1 };
const source = { b: 2 };
// Old way: Object.assign
// Modern way: Spread Operator { ...target, ...source }
const merged = Object.assign(target, source);
console.log("E. Assign:", merged); // { a: 1, b: 2 }

console.log("\n========================================");
console.log("--- 3. LOCKING DOWN OBJECTS ---");
console.log("========================================");

// A. Object.seal() -> "No New Props, No Deleting"
// You CAN change existing values.
const sealed = { id: 1 };
Object.seal(sealed);
sealed.id = 2; // ✅ Allowed (Changing value)
sealed.newProp = "test"; // ❌ Ignored (Cannot add)
delete sealed.id; // ❌ Ignored (Cannot delete)
console.log("Sealed Object:", sealed); // { id: 2 }

// B. Object.freeze() -> "Read Only"
// STRICTEST level. Nothing can change.
const frozen = { id: 1 };
Object.freeze(frozen);
frozen.id = 2; // ❌ Ignored
frozen.newProp = "test"; // ❌ Ignored
console.log("Frozen Object:", frozen); // { id: 1 }

console.log("\n========================================");
console.log("--- 4. INSTANCE METHODS ---");
console.log("========================================");

// A. hasOwnProperty()
// Checks if the key is YOURS, not the parent's.
const myObj = Object.create({ inheritedProp: true });
myObj.ownProp = true;

console.log("Has 'ownProp'?", myObj.hasOwnProperty("ownProp")); // true
console.log("Has 'inheritedProp'?", myObj.hasOwnProperty("inheritedProp")); // false
