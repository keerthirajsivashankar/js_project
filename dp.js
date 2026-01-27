// Hey man! This is the "Final Boss" of Algorithm interviews.
// We are going to turn an O(2^n) crash into an O(n) speedster.

console.log("===============================");
console.log("--- 1. THE PROBLEM (Recursive Nightmare) ---");
console.log("===============================");

// ❌ SLOW WAY
let calculations = 0;

function fibSlow(n) {
  calculations++;
  if (n <= 2) return 1;
  return fibSlow(n - 1) + fibSlow(n - 2);
}

// Try running this with n=30. It's okay.
// Try n=50? Your browser will freeze.
const resultSlow = fibSlow(10);
console.log(`Slow Fib(10): ${resultSlow}`);
console.log(`Calculations needed: ${calculations}`);
// For just 10, it took ~100 calls. For 50, it takes TRILLIONS.

console.log("\n===============================");
console.log("--- 2. MEMOIZATION (Top-Down + Cache) ---");
console.log("===============================");
// ✅ FAST WAY #1
// We pass a "memo" object to store results we've already found.

let memoCalcs = 0;

function fibMemo(n, memo = {}) {
  memoCalcs++;

  // 1. Check the Cache (Notebook)
  if (memo[n]) return memo[n];

  // 2. Base Case
  if (n <= 2) return 1;

  // 3. Calculate and SAVE to Cache
  const res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = res;

  return res;
}

const resultMemo = fibMemo(50); // This is instant!
console.log(`Memoized Fib(50): ${resultMemo}`);
console.log(`Calculations needed: ${memoCalcs}`);
// Only ~99 calculations for Fib(50). Massive improvement.

console.log("\n===============================");
console.log("--- 3. TABULATION (Bottom-Up) ---");
console.log("===============================");
// ✅ FAST WAY #2 (Iterative)
// No Recursion. Just a simple loop.
// This is often better because it doesn't fill up the "Call Stack".

function fibTab(n) {
  if (n <= 2) return 1;

  // Create an array to store the sequence: [0, 1, 1, 2, 3, 5...]
  const fibNums = [0, 1, 1];

  // Just loop from 3 up to n
  for (let i = 3; i <= n; i++) {
    // New number is sum of previous two
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }

  return fibNums[n];
}

console.log(`Tabulation Fib(50): ${fibTab(50)}`);

console.log("\n===============================");
console.log("--- 4. REAL WORLD: CLIMBING STAIRS ---");
console.log("===============================");
// Interview Q: "You are climbing a staircase. It takes n steps to reach the top.
// Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?"

// Input: 3
// Ways: (1+1+1), (1+2), (2+1) -> Total 3

// TRICK: This is literally just Fibonacci disguised!
// To get to Step 5, you must have come from Step 4 (jump 1) OR Step 3 (jump 2).
// Ways(5) = Ways(4) + Ways(3)

function climbStairs(n) {
  if (n <= 2) return n;

  let oneStepBefore = 2; // Ways to get to step 2
  let twoStepsBefore = 1; // Ways to get to step 1
  let allWays = 0;

  for (let i = 3; i <= n; i++) {
    allWays = oneStepBefore + twoStepsBefore;

    // Shift the window up for the next loop
    twoStepsBefore = oneStepBefore;
    oneStepBefore = allWays;
  }

  return allWays;
}

console.log("Ways to climb 5 stairs:", climbStairs(5)); // 8
console.log("Ways to climb 10 stairs:", climbStairs(10)); // 89
