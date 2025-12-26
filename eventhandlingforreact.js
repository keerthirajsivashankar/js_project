// Hey man! This is the "Ghost" that haunts React apps.
// It explains why we need useMemo and useCallback.

console.log("===============================");
console.log("--- 1. THE TRAP (Referential Equality) ---");
console.log("===============================");

// PRIMITIVES are compared by VALUE
console.log("1 === 1?", 1 === 1); // true
console.log("'hello' === 'hello'?", "hello" === "hello"); // true

// OBJECTS & FUNCTIONS are compared by REFERENCE (Address)
const dog1 = { name: "Spot" };
const dog2 = { name: "Spot" };

console.log("dog1 === dog2?", dog1 === dog2);
// Output: FALSE (Different houses, same furniture)

// FUNCTIONS are Objects too!
const bark1 = () => console.log("Woof");
const bark2 = () => console.log("Woof");

console.log("bark1 === bark2?", bark1 === bark2);
// Output: FALSE (Different functions, same logic)

console.log("\n===============================");
console.log("--- 2. SIMULATING A REACT RE-RENDER ---");
console.log("===============================");

// Imagine this is your React Component function
function AppRender() {
  // Inside the component, you define a handler
  const handleClick = () => {
    console.log("Clicked");
  };

  return handleClick;
}

// Render 1
const render1_Handler = AppRender();

// Render 2 (Component updates)
const render2_Handler = AppRender();

console.log(
  "Did the handler stay the same?",
  render1_Handler === render2_Handler
);
// Output: FALSE!
// To React, this looks like a CHANGED prop, forcing a re-render of children.

console.log("\n===============================");
console.log("--- 3. MEMOIZATION (The Fix) ---");
console.log("===============================");
// Memoization = "Caching the result of a function".
// If inputs are the same, return the EXISTING value/function instead of making a new one.

// Let's build a simple 'memoize' helper
function memoize(fn) {
  const cache = {};

  return function (arg) {
    if (cache[arg]) {
      console.log("⚡ Fetching from cache...");
      return cache[arg];
    } else {
      console.log("🐌 Calculating new result...");
      const result = fn(arg);
      cache[arg] = result;
      return result;
    }
  };
}

// A "Slow" function
const square = (n) => {
  // Fake delay
  for (let i = 0; i < 10000000; i++) {}
  return n * n;
};

const memoSquare = memoize(square);

console.log("1. First call (5):", memoSquare(5)); // Calculates (Slow)
console.log("2. Second call (5):", memoSquare(5)); // Cache (Instant!)
console.log("3. Third call (10):", memoSquare(10)); // Calculates (Slow)
