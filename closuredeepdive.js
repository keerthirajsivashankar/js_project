// Hey man! This is the Deep Dive into CLOSURES.
// This explains how functions "remember" data.

console.log("===============================");
console.log("--- 1. THE BASIC CLOSURE (The Backpack) ---");
console.log("===============================");

function outer() {
  const outerVar = "I am from the Outer Scope";

  function inner() {
    // inner is defined INSIDE outer.
    // It captures 'outerVar' in its Closure (Backpack).
    console.log(outerVar);
  }

  return inner;
}

const myFunc = outer();
// At this line, 'outer' has finished running.
// Normally, 'outerVar' should be garbage collected (deleted).

console.log("Calling the returned function...");
myFunc();
// Output: "I am from the Outer Scope"
// IT REMEMBERED! Even though 'outer' is dead.

console.log("\n===============================");
console.log("--- 2. REAL WORLD: DATA PRIVACY ---");
console.log("===============================");
// Interview Q: "How do you create private variables in JS?"
// Answer: "I use Closures."

function createBank() {
  let balance = 0; // PRIVATE variable. Cannot be touched directly.

  return {
    deposit: (amount) => {
      balance += amount;
      console.log(`Deposited ${amount}. Balance: ${balance}`);
    },
    withdraw: (amount) => {
      if (amount > balance) {
        console.log("❌ Insufficient funds!");
        return;
      }
      balance -= amount;
      console.log(`Withdrew ${amount}. Balance: ${balance}`);
    },
    getBalance: () => {
      return balance;
    },
  };
}

const myAccount = createBank();

myAccount.deposit(100);
myAccount.withdraw(30);
// myAccount.balance = 1000000; // ❌ This won't work! 'balance' is not a property. It's hidden.
console.log("Trying to hack balance:", myAccount.balance); // undefined

console.log("\n===============================");
console.log("--- 3. THE CLASSIC INTERVIEW TRAP (Loops) ---");
console.log("===============================");
// Q: What does this print?

console.log("--- The 'var' Disaster ---");
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    // Because 'var' is Function Scoped (Global here), there is only ONE 'i' variable.
    // By the time the timer runs (100ms later), the loop is finished and i is 4.
    console.log(`Index (var): ${i}`);
  }, 100);
}
// Expected Output: 1, 2, 3
// Actual Output: 4, 4, 4 (ALL WRONG)

// Q: How to fix it?
// A: Use 'let' OR use a Closure.

console.log("--- The 'let' Fix (Block Scope) ---");
for (let j = 1; j <= 3; j++) {
  setTimeout(function () {
    // 'let' creates a NEW 'j' binding for every iteration of the loop.
    // Each timer gets a unique closure with the correct number.
    console.log(`Index (let): ${j}`);
  }, 200);
}
// Output: 1, 2, 3 (Correct)

console.log("--- The Closure Fix (IIFE) ---");
// If you MUST use 'var', you wrap it in a function to create a new scope manually.
for (var k = 1; k <= 3; k++) {
  (function (lockedIndex) {
    // 'lockedIndex' is a new variable created for THIS function call.
    setTimeout(function () {
      console.log(`Index (Closure): ${lockedIndex}`);
    }, 300);
  })(k);
}
// Output: 1, 2, 3 (Correct)
