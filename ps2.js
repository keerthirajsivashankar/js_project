// Hey man! This is "Level 3" Problem Solving.
// These patterns are the bread and butter of technical interviews.

console.log("===============================");
console.log("--- PATTERN 7: BINARY SEARCH (Divide & Conquer) ---");
console.log("===============================");
// THE PROBLEM: Find the index of 'target' in a SORTED array.
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Target: 9

// BAD WAY (Linear Search): Loop 1 by 1. Takes 9 steps. O(N).
// PRO WAY (Binary Search): Cut it in half repeatedly. Takes 3 steps. O(log N).

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // 1. Find the middle index
    const mid = Math.floor((left + right) / 2);
    const midVal = arr[mid];

    console.log(`Checking Middle: Index ${mid} (Value: ${midVal})`);

    // 2. Check if we found it
    if (midVal === target) return mid;

    // 3. Divide and Conquer
    if (midVal < target) {
      // If middle is too small, ignore the WHOLE left half
      left = mid + 1;
    } else {
      // If middle is too big, ignore the WHOLE right half
      right = mid - 1;
    }
  }

  return -1; // Not found
}

const sortedNums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Found 90 at index:", binarySearch(sortedNums, 90));

console.log("\n===============================");
console.log("--- PATTERN 8: STACKS (Valid Parentheses) ---");
console.log("===============================");
// THE PROBLEM: Check if brackets are valid.
// "()" -> Valid
// "()[]{}" -> Valid
// "(]" -> Invalid
// "([)]" -> Invalid

// THE TRICK: Use an Array as a STACK (Last-In, First-Out).
// Push openers. When you see a closer, POP the last opener and check if it matches.

function isValidParentheses(s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of s) {
    // If it's an OPENER (it exists as a key in our map)
    if (map[char]) {
      stack.push(char);
    }
    // If it's a CLOSER
    else {
      // Pop the last opener off the stack
      const lastOpener = stack.pop();

      // Check if the closer matches the opener
      if (map[lastOpener] !== char) {
        return false; // Mismatch!
      }
    }
  }

  // If stack is empty, every opener was closed. Valid!
  return stack.length === 0;
}

console.log("Is '()[]{}' valid?", isValidParentheses("()[]{}")); // true
console.log("Is '([)]' valid?", isValidParentheses("([)]")); // false
console.log("Is '(]' valid?", isValidParentheses("(]")); // false

console.log("\n===============================");
console.log("--- PATTERN 9: GREEDY (Best Time to Buy Stock) ---");
console.log("===============================");
// THE PROBLEM: You have an array of prices [7, 1, 5, 3, 6, 4].
// You want to Buy Low, Sell High. What is the Max Profit?
// (Buy at 1, Sell at 6 -> Profit 5)

// THE TRICK: Don't compare every pair (O(N^2)).
// Just walk through once. Keep track of the LOWEST price seen so far.

function maxProfit(prices) {
  let minPrice = Infinity; // Start super high
  let maxProfit = 0; // Start at 0

  for (let price of prices) {
    if (price < minPrice) {
      // Found a new lowest price to buy at!
      minPrice = price;
    } else {
      // Calculate profit if we sold TODAY
      const profit = price - minPrice;

      // Is this profit better than our previous best?
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}

const stockPrices = [7, 1, 5, 3, 6, 4];
console.log("Max Profit for [7, 1, 5, 3, 6, 4]:", maxProfit(stockPrices));
// Logic:
// 7: min=7
// 1: min=1 (New low!)
// 5: Profit = 5-1 = 4. maxProfit=4
// 3: Profit = 3-1 = 2. maxProfit still 4
// 6: Profit = 6-1 = 5. maxProfit=5 (New best!)
// 4: Profit = 4-1 = 3. maxProfit still 5
