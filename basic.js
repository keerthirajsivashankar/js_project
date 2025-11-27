// Hey man! This is your guide to "Currying".
// This is a Functional Programming technique interviewers LOVE.

console.log("===============================");
console.log("--- 1. BASIC CURRYING ---");
console.log("===============================");

// Normal Function
function addNormal(a, b, c) {
  return a + b + c;
}
console.log("Normal Add(1, 2, 3):", addNormal(1, 2, 3)); // 6

// Curried Version
// It's a function... that returns a function... that returns a function.
function addCurried(a) {
  return function (b) {
    return function (c) {
      return a + b + c; // It remembers 'a' and 'b' via Closure!
    };
  };
}

// Modern Arrow Syntax (One-liner)
// const addCurriedArrow = a => b => c => a + b + c;

console.log("Curried Add(1)(2)(3):", addCurried(1)(2)(3)); // 6

// BREAKDOWN:
// 1. addCurried(1) runs -> Returns Function B (remembering a=1)
// 2. Function B(2) runs -> Returns Function C (remembering a=1, b=2)
// 3. Function C(3) runs -> Returns 1 + 2 + 3 -> 6

console.log("\n===============================");
console.log("--- 2. WHY USE THIS? (Partial Application) ---");
console.log("===============================");
// The superpower of currying is "Reusability".
// You can make SPECIALIZED versions of general functions.

// Imagine a generic function to multiply:
const multiply = (a) => (b) => a * b;

// Now we can create specific "helper" functions from it:
const double = multiply(2); // 'a' is locked to 2
const triple = multiply(3); // 'a' is locked to 3

console.log("Double(10):", double(10)); // 20
console.log("Double(50):", double(50)); // 100
console.log("Triple(10):", triple(10)); // 30

// We didn't have to rewrite the logic. We just "partially applied" the first argument.

console.log("\n===============================");
console.log("--- 3. INFINITE CURRYING (The Interview Nightmare) ---");
console.log("===============================");
// Question: Write a sum function that works for ANY number of arguments.
// sum(1)(2)(3)(4)(5).....()

function infiniteSum(a) {
  return function (b) {
    if (b) {
      // If an argument 'b' is passed, call infiniteSum again with the total so far.
      // This is RECURSION.
      return infiniteSum(a + b);
    } else {
      // If no argument is passed (empty brackets), simply return the total 'a'.
      return a;
    }
  };
}

// Usage:
// We end with an empty () to signal "I'm done adding".
console.log("Infinite Sum(1)(2)(3)(4)():", infiniteSum(1)(2)(3)(4)()); // 10
console.log("Infinite Sum(5)(10)():", infiniteSum(5)(10)()); // 15
