// Hey man! This is the "Brain Anatomy" of JavaScript.
// Run this and guess the order before looking at the console!

console.log("===============================");
console.log("--- THE EVENT LOOP RACE ---");
console.log("===============================");

console.log("1. Script Start");

// 1. setTimeout (Macrotask)
// Even though it says 0ms, it goes to the "Web API" -> "Callback Queue".
// It has to wait for the Stack AND the Microtask Queue to be empty.
setTimeout(() => {
  console.log("2. setTimeout (Macrotask) - I run last!");
}, 0);

// 2. Promise (Microtask)
// Promises go to the "Microtask Queue" (The VIP Line).
// The Event Loop checks this queue BEFORE the Callback Queue.
Promise.resolve().then(() => {
  console.log("3. Promise (Microtask) - I cut the line!");
});

// 3. Synchronous Code
// This goes straight to the Stack.
console.log("4. Script End");

// --- THE EXECUTION ORDER EXPLAINED ---

// 1. "1. Script Start" (Sync - Stack)
// 2. "4. Script End"   (Sync - Stack)
//    -- The Stack is now empty. The Event Loop looks for work. --
// 3. CHECK VIP LINE (Microtasks):
//    Found the Promise! Run it.
//    "3. Promise..."
// 4. CHECK REGULAR LINE (Macrotasks):
//    Found the setTimeout! Run it.
//    "2. setTimeout..."

console.log("\n===============================");
console.log("--- A COMPLEX EXAMPLE ---");
console.log("===============================");
// Let's mix them up to verify you get it.

/*
  PREDICTION GAME:
  1. Sync logs first.
  2. Microtasks (Promises) second.
  3. Macrotasks (Timers) last.
*/

setTimeout(() => console.log("A - Timeout"), 0);

Promise.resolve().then(() => {
  console.log("B - Promise 1");
  // A promise INSIDE a promise?
  // It's still a microtask, added to the END of the VIP line.
  Promise.resolve().then(() => console.log("C - Promise 2"));
});

console.log("D - Sync Log");

// CORRECT ORDER:
// D (Sync)
// B (Microtask 1)
// C (Microtask 2 - added by B)
// A (Macrotask - waited for all Promises to finish)
