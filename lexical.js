// Hey man! This is the battle: Arrow Functions vs. Regular Functions.
// It explains why we use () => {} inside callbacks.

console.log("===============================");
console.log("--- 1. THE PROBLEM (Regular Functions) ---");
console.log("===============================");

const regularObj = {
  name: "Regular Object",

  // Method 1: Regular function
  greet: function () {
    console.log("1. Immediate call:", this.name);
    // Works! 'this' is 'regularObj' because we called regularObj.greet()

    // BUT... what if we pass a function to setTimeout?
    setTimeout(function () {
      // THE TRAP:
      // Who calls this function? The Timer (Window/Global).
      // So 'this' is NOT the object anymore. It's the Window.
      console.log("2. Inside setTimeout (Regular):", this.name);
      // Output: undefined (or Window)
    }, 1000);
  },
};

regularObj.greet();

// WAIT for the logs... you'll see "undefined" for the second one.

console.log("\n===============================");
console.log("--- 2. THE SOLUTION (Arrow Functions) ---");
console.log("===============================");

const arrowObj = {
  name: "Arrow Object",

  greet: function () {
    // We still use a regular function here to establish the initial scope
    console.log("3. Immediate call:", this.name);

    // NOW check this out:
    setTimeout(() => {
      // ARROW FUNCTION MAGIC:
      // It doesn't define its own 'this'.
      // It looks UP to the parent (greet function) and uses THAT 'this'.
      console.log("4. Inside setTimeout (Arrow):", this.name);
      // Output: "Arrow Object" (It works!)
    }, 1000);
  },
};

// Wait a second for the previous logs to clear so we can see this clearly
setTimeout(() => {
  console.log("\n--- Running Arrow Object ---");
  arrowObj.greet();
}, 2000);

console.log("\n===============================");
console.log("--- 3. THE REVERSE TRAP (Don't use Arrows everywhere) ---");
console.log("===============================");
// Interviewer: "Should you use Arrow functions for TOP LEVEL methods?"
// Answer: NO!

const badObj = {
  name: "Bad Object",

  // If you use an arrow here...
  // It looks up to the parent... which is the GLOBAL SCOPE (Window).
  greet: () => {
    console.log("5. Top-level Arrow Method:", this.name);
  },
};

// This will fail (undefined)
setTimeout(() => {
  console.log("\n--- Running Bad Object ---");
  badObj.greet();
}, 3000);
