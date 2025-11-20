// Hey man! This covers the "Invisible" parts of JS.

console.log("===============================");
console.log("--- 1. HOISTING (The Interview Gotcha) ---");
console.log("===============================");

// --- A. Function Hoisting ---
// Look! We can call this function BEFORE it's defined.
// This works because JS "hoists" the entire function to the top.
console.log("Calling futureFunction():", futureFunction());

function futureFunction() {
  return "I am from the future (bottom of file)!";
}

// --- B. Variable Hoisting (var vs let) ---

console.log("\n--- var hoisting ---");
// JS sees 'var myVar' at the top, but not the value.
// So it exists, but it is 'undefined'.
console.log("Accessing 'myVar' before definition:", myVar);
var myVar = "I am a VAR";

console.log("\n--- let/const hoisting ---");
try {
  // JS knows 'myLet' exists, but refuses to let you touch it.
  // This is the "Temporal Dead Zone".
  console.log(myLet);
} catch (e) {
  console.log("Error accessing 'myLet':", e.message);
}
let myLet = "I am a LET";

console.log("\n\n===============================");
console.log("--- 2. CLOSURES (The Magic Backpack) ---");
console.log("===============================");

// Imagine we want a private counter.
// We create a function that RETURNS another function.

function createCounter() {
  // 'count' is a local variable. It should die when this function ends.
  let count = 0;

  console.log("Outer function ran. 'count' is created.");

  // This inner function USES 'count'.
  // Because of CLOSURE, it puts 'count' in its "backpack".
  return function () {
    count++; // It remembers 'count' from before!
    console.log("Current count:", count);
  };
}

// 1. Run the outer function.
// It returns the inner function. The outer function is now DEAD.
const myCounter = createCounter();

console.log("\nNow running the returned function...");

// 2. Run the inner function.
// Even though createCounter() is finished, myCounter() still has access to 'count'!
myCounter(); // count becomes 1
myCounter(); // count becomes 2
myCounter(); // count becomes 3

// 3. Create a completely SEPARATE counter
// This gets a BRAND NEW "backpack" with its own 'count'.
console.log("\nCreating a second, separate counter...");
const anotherCounter = createCounter();
anotherCounter(); // count is 1 (totally separate from the first one)

// Why is this useful?
// It creates "Private Variables".
// You cannot access 'count' directly from here.
// console.log(count); // Error!
// You can ONLY change it by calling the function.
