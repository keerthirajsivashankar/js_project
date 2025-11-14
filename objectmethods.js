// Hey man! This is your complete guide to Objects.
// Run this file and study the console.

console.log("===============================");
console.log("--- 1. Creating & Accessing Properties ---");
console.log("===============================");

// This is an "Object Literal" - the most common way to make an object.
let car = {
  make: "Honda",
  model: "Civic",
  year: 2021,
  "has-turbo": true, // Keys with special chars MUST be in quotes
};
console.log("Original car object:", car);

// --- Accessing Properties ---

// A) Dot Notation (The 99% use case)
// Use this when you know the key name.
console.log("Car make:", car.make); // 'Honda'
console.log("Car year:", car.year); // 2021

// B) Bracket Notation (The 1% 'power' use case)
// Use this when the key is dynamic (in a variable) or has special chars.
console.log("Car model:", car["model"]); // 'Civic'
console.log("Has turbo?", car["has-turbo"]); // true

// Why bracket notation is powerful:
let propToGet = "make";
console.log("Dynamic key 'make':", car[propToGet]); // 'Honda'

// --- Adding & Modifying Properties ---

// Modifying (just assign a new value)
car.year = 2022;
console.log("After updating year:", car);

// Adding (just assign to a new key)
car.color = "blue";
console.log("After adding color:", car);

// --- Deleting Properties ---
delete car["has-turbo"];
console.log("After deleting 'has-turbo':", car);

console.log("\n===============================");
console.log("--- 2. Nested Objects & Arrays ---");
console.log("===============================");
// Values can be anything! Numbers, strings, arrays, even other objects.
let user = {
  id: 101,
  name: "Alex",
  skills: ["JavaScript", "React", "Node.js"], // Value is an Array
  address: {
    // Value is another Object
    city: "New York",
    zip: "10001",
  },
};
console.log("Nested user object:", user);

// Accessing nested data is easy, just chain the dots:
console.log("User's city:", user.address.city); // 'New York'
console.log("User's second skill:", user.skills[1]); // 'React'

console.log("\n===============================");
console.log("--- 3. Methods (Functions in Objects) & 'this' ---");
console.log("===============================");
// A "method" is just a function that is a property of an object.
// This is where the 'this' keyword becomes critical.

let person = {
  firstName: "John",
  lastName: "Doe",

  // This is a METHOD
  greet: function () {
    // 'this' refers to the object that the function is being
    // called ON. In this case, 'this' is the 'person' object.
    //
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },

  // Modern "shorthand" syntax for a method
  farewell() {
    console.log(`Goodbye from ${this.firstName}.`);
  },
};

console.log("Person object with methods:", person);
// To run the method, you MUST call it with ()
person.greet(); // "Hello, my name is John Doe"
person.farewell(); // "Goodbye from John."

console.log("\n===============================");
console.log("--- 4. Iterating (Looping) Over Objects ---");
console.log("===============================");

// A) The "Old" Way: for...in
// (Interview Gotcha: This also loops over "inherited" properties)
console.log("--- 'for...in' loop (gets keys) ---");
for (let key in car) {
  // We add a check to make sure the key is the object's OWN property
  if (car.hasOwnProperty(key)) {
    console.log(`Key: ${key}, Value: ${car[key]}`); // Must use bracket notation!
  }
}

// B) The "Modern" Way: Object.keys(), .values(), .entries()
// These are STATIC METHODS - you call them on the 'Object' class itself.
//

// --- Object.keys() ---
// Returns an ARRAY of all the object's own keys.
const keys = Object.keys(user);
console.log("\nObject.keys(user):", keys); // ['id', 'name', 'skills', 'address']
// Now you can use array methods!
console.log("Looping with .keys().forEach():");
keys.forEach((key) => {
  console.log(`  ${key}: ${user[key]}`);
});

// --- Object.values() ---
// Returns an ARRAY of all the object's own values.
const values = Object.values(user);
console.log("\nObject.values(user):", values);

// --- Object.entries() ---
// Returns an ARRAY of [key, value] pairs.
// This is SUPER powerful.
const entries = Object.entries(user);
console.log("\nObject.entries(user):", entries);
// You can loop over it easily:
console.log("Looping with .entries().forEach():");
for (const [key, value] of entries) {
  console.log(`  ${key} -> ${value}`);
}

console.log("\n===============================");
console.log("--- 5. Other Key Object Methods ---");
console.log("===============================");

// --- Object.assign() (Cloning & Merging) ---
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 }; // Note the 'b' overlaps
// It merges obj2 *into* obj1
const merged = Object.assign({}, obj1, obj2);
console.log("Merged object with Object.assign():", merged); // { a: 1, b: 3, c: 4 }

// Modern Way: The Spread Operator (...)
// This is what you'll see in all modern code.
const spreadMerged = { ...obj1, ...obj2 };
console.log("Merged object with spread operator:", spreadMerged); // { a: 1, b: 3, c: 4 }
// This is also the easiest way to clone an object:
const carClone = { ...car };
console.log("Car clone:", carClone);

// --- Object.freeze() (Making it immutable) ---
// This is how you'd make a "tuple" like we discussed.
const settings = Object.freeze({
  theme: "dark",
  version: "1.0.0",
});
console.log("\nFrozen object:", settings);
// Now, let's try to change it...
try {
  settings.theme = "light"; // This will fail
} catch (e) {
  console.log("Error trying to change frozen object:", e.message);
}
console.log("Object after trying to change:", settings); // Still "dark"
