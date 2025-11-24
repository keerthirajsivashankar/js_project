// Hey man! This is the "Safety Manual" for JS Objects.
// Run this to see how memory works.

console.log("===============================");
console.log("--- 1. THE TRAP (Reference Copy) ---");
console.log("===============================");

// Let's make an object (The "Original")
const originalUser = {
  name: "Alex",
  details: {
    age: 30,
    city: "New York",
  },
};

// 1. We try to "copy" it simply.
const referenceCopy = originalUser;

// 2. We change the COPY.
referenceCopy.name = "BOB";

console.log("We changed referenceCopy.name to 'BOB'...");
console.log("Original User name:", originalUser.name);
// Output: "BOB" (Wait, what? We changed the original!)

// WHY? Because 'originalUser' and 'referenceCopy' point to the SAME address.
//

console.log("\n===============================");
console.log("--- 2. SHALLOW COPY (The Spread Operator) ---");
console.log("===============================");
// Goal: Create a real copy so the top-level properties don't link.
// Method: Use the Spread Operator (...) or Object.assign()

// Reset for demo
const user2 = { name: "Alex", details: { age: 30 } };

// 1. Create a Shallow Copy
const shallowCopy = { ...user2 };

// 2. Change the top-level property
shallowCopy.name = "Charlie";

console.log("Shallow Copy name:", shallowCopy.name); // Charlie
console.log("Original User2 name:", user2.name); // Alex (Safe!)

// --- THE GOTCHA (Nested Objects) ---
// Shallow copy only copies the FIRST layer.
// Nested objects (like 'details') are STILL References!

shallowCopy.details.age = 99; // Changing nested data

console.log("\nWe changed shallowCopy.details.age to 99...");
console.log("Original User2 age:", user2.details.age);
// Output: 99 (It changed! The nested object is still linked.)

console.log("\n===============================");
console.log("--- 3. DEEP COPY (The Real Fix) ---");
console.log("===============================");
// Goal: Completely disconnect EVERYTHING, even nested objects.

const user3 = { name: "Alex", details: { age: 30 } };

// Method A: The "Old School" Hack (JSON)
// 1. Turn object into a string (breaks the reference).
// 2. Turn string back into an object (creates brand new memory).
const deepCopyJSON = JSON.parse(JSON.stringify(user3));

deepCopyJSON.details.age = 50;
console.log("JSON Copy age:", deepCopyJSON.details.age); // 50
console.log("Original User3 age:", user3.details.age); // 30 (Safe!)

// Method B: The Modern Way (structuredClone)
// Works in all modern browsers and Node.js
const deepCopyModern = structuredClone(user3);

deepCopyModern.details.age = 100;
console.log("Modern Copy age:", deepCopyModern.details.age); // 100
console.log("Original User3 age:", user3.details.age); // 30 (Still Safe!)

console.log("\n===============================");
console.log("--- INTERVIEW CHEAT SHEET ---");
console.log("===============================");
// Q: How do you copy an object?
// A:
// 1. "For simple, flat objects, I use the Spread Operator: const copy = { ...original }."
// 2. "If the object has nested data, Spread is only a Shallow Copy."
// 3. "For a true Deep Copy, I use 'structuredClone(original)' or 'JSON.parse(JSON.stringify(original))'."
