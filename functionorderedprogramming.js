// Hey man! This is how you write clean, "chainable" logic without classes.
// This is heavily used in Redux and Modern React Utils.

console.log("===============================");
console.log("--- 1. THE PROBLEM (Nesting Hell) ---");
console.log("===============================");

const add5 = (n) => n + 5;
const double = (n) => n * 2;
const square = (n) => n * n;

// Goal: Take 2 -> Add 5 (7) -> Double (14) -> Square (196)

// The Ugly Way:
// You have to read this from Inside-Out (Right-to-Left). Hard to read.
const resultUgly = square(double(add5(2)));
console.log("Ugly Result:", resultUgly); // 196

console.log("\n===============================");
console.log("--- 2. THE SOLUTION (Pipe) ---");
console.log("===============================");
// Pipe runs functions Left-to-Right.
// pipe(add5, double, square)(2) -> Readable!

// The Logic:
// We use .reduce() to pass the value through each function.
// acc = current value, fn = next function
const pipe =
  (...functions) =>
  (initialValue) => {
    return functions.reduce((acc, fn) => fn(acc), initialValue);
  };

/* BREAKDOWN of pipe trace with input 2:
  1. acc starts as 2.
  2. First function (add5) runs: 2 + 5 = 7. New acc is 7.
  3. Second function (double) runs: 7 * 2 = 14. New acc is 14.
  4. Third function (square) runs: 14 * 14 = 196.
*/

const runMath = pipe(add5, double, square);
const resultPipe = runMath(2);

console.log("Pipe Result:", resultPipe); // 196

console.log("\n===============================");
console.log("--- 3. REAL WORLD EXAMPLE (Data Transformation) ---");
console.log("===============================");

// Let's format a User Object for display.

const user = { firstName: "  alex  ", lastName: "  doe  ", role: "admin" };

// Small helper functions (Single Responsibility Principle)
const trimName = (u) => ({
  ...u,
  firstName: u.firstName.trim(),
  lastName: u.lastName.trim(),
});
const capitalizeName = (u) => ({
  ...u,
  firstName: u.firstName.charAt(0).toUpperCase() + u.firstName.slice(1),
  lastName: u.lastName.charAt(0).toUpperCase() + u.lastName.slice(1),
});
const addGreeting = (u) =>
  `Hello, ${u.firstName} ${u.lastName}. Role: ${u.role}`;

// Create the pipeline
const prepareWelcomeMessage = pipe(trimName, capitalizeName, addGreeting);

console.log("Welcome Message:", prepareWelcomeMessage(user));
// Output: "Hello, Alex Doe. Role: admin"

console.log("\n===============================");
console.log("--- 4. COMPOSE (The Reverse) ---");
console.log("===============================");
// Compose is the same as Pipe, but Right-to-Left.
// This is used in Mathematical proofs and older Redux code.

// We just use .reduceRight() instead of .reduce()
const compose =
  (...functions) =>
  (initialValue) => {
    return functions.reduceRight((acc, fn) => fn(acc), initialValue);
  };

// Math order: square(double(add5(2)))
// We write it in that order:
const runMathCompose = compose(square, double, add5);

console.log("Compose Result:", runMathCompose(2)); // 196
