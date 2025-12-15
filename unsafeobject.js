// Hey man! This is your introduction to Meta-Programming with PROXIES.
// We are going to build an "Intelligent Object" that protects itself.

console.log("===============================");
console.log("--- THE PROBLEM (Unsafe Objects) ---");
console.log("===============================");

const user = {
  name: "Alex",
  age: 25,
};

// Normally, we can do stupid things:
user.age = -100; // Impossible age!
user.age = "twenty"; // Wrong type!
console.log("Unsafe User:", user);
// Output: { name: 'Alex', age: 'twenty' } -> Our data is corrupted.

console.log("\n===============================");
console.log("--- THE SOLUTION (The Proxy Guard) ---");
console.log("===============================");

// 1. The Original Object (The Target)
const safeUserTarget = {
  name: "Sam",
  age: 30,
  _secretId: "123-456", // Convention: keys starting with _ are private
};

// 2. The Handler (The Rules)
const handler = {
  // TRAP 1: Intercept 'Reading' properties (get)
  get: function (target, property) {
    console.log(`👀 Someone is trying to read '${property}'...`);

    // Rule: Don't let anyone read private properties
    if (property.startsWith("_")) {
      return "ACCESS DENIED 🛑";
    }

    // Otherwise, give them the value, but transform it to uppercase if it's a string!
    const value = target[property];
    if (typeof value === "string") {
      return value.toUpperCase();
    }
    return value;
  },

  // TRAP 2: Intercept 'Writing' properties (set)
  set: function (target, property, value) {
    console.log(`📝 Someone is trying to set '${property}' to '${value}'...`);

    // Rule: Age must be a number
    if (property === "age") {
      if (typeof value !== "number") {
        console.error("❌ Error: Age must be a number!");
        return false; // Stop the change
      }
      if (value < 0 || value > 120) {
        console.error("❌ Error: Age must be realistic!");
        return false; // Stop the change
      }
    }

    // If it passes the rules, actually save it
    target[property] = value;
    console.log("✅ Success! Value updated.");
    return true;
  },
};

// 3. Create the Proxy
// new Proxy(target, handler)
const protectedUser = new Proxy(safeUserTarget, handler);

console.log("\n--- TESTING THE PROXY ---");

// Test A: Reading
console.log("\n1. Reading Name:");
console.log("Value:", protectedUser.name);
// Output: "SAM" (Our 'get' trap uppercased it!)

console.log("\n2. Reading Private ID:");
console.log("Value:", protectedUser._secretId);
// Output: "ACCESS DENIED" (Our 'get' trap blocked it!)

// Test B: Writing (Validation)
console.log("\n3. Setting Valid Age:");
protectedUser.age = 35; // Should work

console.log("\n4. Setting Invalid Type:");
protectedUser.age = "Forty"; // Should fail logic

console.log("\n5. Setting Impossible Age:");
protectedUser.age = -500; // Should fail logic

console.log("\n--- FINAL STATE ---");
console.log(safeUserTarget);
// Notice: Only the VALID changes (35) got through to the actual object.
