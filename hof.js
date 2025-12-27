// Hey man! This is the Engine Room of React.
// React Components ARE Higher-Order structures.

console.log("===============================");
console.log("--- 1. WHAT IS A HOF? ---");
console.log("===============================");
// Definition: A function that takes a function OR returns a function.

// Example: A generic math wrapper
// 'operation' is a function passed in as an argument.
function calculate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log("1. Add:", calculate(5, 5, add)); // 10
console.log("2. Multiply:", calculate(5, 5, multiply)); // 25
// REACT CONNECTION: This is exactly how you pass 'onClick' handlers!
// <Button onClick={handleClick} />

console.log("\n===============================");
console.log("--- 2. RETURNING FUNCTIONS (The React Event Trap) ---");
console.log("===============================");

// Scenario: You have a list of buttons. Each needs to delete a specific ID.

// THE SETUP
const deleteItem = (id) => {
  console.log(`🗑️ Deleting Item ID: ${id}`);
};

// ❌ THE BUG (Running Immediately)
// If you write: onClick={deleteItem(1)}
// JS sees the (), so it runs it INSTANTLY when the page loads.
console.log("--- The Bug (Runs Instantly) ---");
const badOnClick = deleteItem(1); // Logs "Deleting..." immediately!
// The 'onClick' now holds the RESULT (undefined), not the function.

// ✅ THE FIX (The Wrapper / Thunk)
// You need a function that RETURNS the logic.
// This is: () => deleteItem(1)
console.log("\n--- The Fix (Wrapper) ---");
const goodOnClick = () => deleteItem(1);
// Nothing happens yet...
console.log("Clicking button now...");
goodOnClick(); // NOW it runs!

// 🧠 THE "PRO" FIX (Currying / Function Factory)
// Instead of an arrow wrapper, we can make a function that RETURNS a function.
const createDeleteHandler = (id) => {
  // This outer part runs once when component renders
  return function () {
    // This inner part runs only when user Clicks
    console.log(`🗑️ (Factory) Deleting Item ID: ${id}`);
  };
};

const proOnClick = createDeleteHandler(55);
console.log("\n--- Pro Fix (Factory) ---");
proOnClick(); // Runs the inner function

console.log("\n===============================");
console.log("--- 3. HIGHER-ORDER COMPONENTS (HOCs) ---");
console.log("===============================");
// Before Hooks, this was the main way to reuse logic.
// It's a function that takes a Component and returns a Wrappped Component.

function withLogger(func) {
  // Returns a new function wrapping the original
  return function (...args) {
    console.log("📝 Log: Function started...");
    const result = func(...args);
    console.log("📝 Log: Function finished.");
    return result;
  };
}

const regularLogin = (user) => `User ${user} logged in.`;

// Wrap it!
const loggingLogin = withLogger(regularLogin);

console.log(loggingLogin("Alex"));
/*
  Output:
  📝 Log: Function started...
  User Alex logged in.
  📝 Log: Function finished.
*/
