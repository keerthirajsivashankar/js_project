// Hey man! Phase 2 of Problem Solving.
// These are slightly trickier but make your code WAY faster.

console.log("===============================");
console.log("--- PATTERN 4: SLIDING WINDOW ---");
console.log("===============================");
// THE PROBLEM: Find the maximum sum of 'k' consecutive numbers.
// [1, 2, 5, 2, 8, 1, 5], k=2
// 1+2=3, 2+5=7, 5+2=7, 2+8=10... Answer is 10.

// THE TRICK: Don't re-calculate the whole group every time.
// "Slide" the window: Subtract the element leaving, Add the element entering.

function maxSubarraySum(arr, k) {
  if (arr.length < k) return null;

  let maxSum = 0;
  let tempSum = 0;

  // 1. Create the first "Window" (Sum of first k items)
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // 2. Slide the window
  // Start from k and go to the end
  for (let i = k; i < arr.length; i++) {
    // The Magic Math:
    // New Sum = Old Sum - (Element leaving window) + (Element entering window)
    // Element leaving is at index [i - k]
    tempSum = tempSum - arr[i - k] + arr[i];

    // Check if this new sum is higher
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

const nums = [2, 6, 9, 2, 1, 8, 5, 6, 3];
console.log("Max Sum of 3 consecutive nums:", maxSubarraySum(nums, 3));
// Logic trace: [2,6,9]=17 -> [6,9,2]=17 -> [9,2,1]=12 -> [2,1,8]=11 -> [1,8,5]=14 -> [8,5,6]=19!
// Answer: 19

console.log("\n===============================");
console.log("--- PATTERN 5: BASIC RECURSION ---");
console.log("===============================");
// THE PROBLEM: Calculate Factorial (5! = 5 * 4 * 3 * 2 * 1)
// THE TRICK: The function calls itself with a smaller number until it hits the "Base Case".

function factorial(n) {
  // 1. THE BASE CASE (The Stop Sign)
  // If we don't have this, the function loops forever and crashes.
  if (n === 1 || n === 0) return 1;

  // 2. THE RECURSIVE CALL
  // 5 * factorial(4)
  // 5 * (4 * factorial(3))...
  return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5)); // 120

console.log("\n===============================");
console.log("--- PATTERN 6: REMOVING DUPLICATES (The One-Liner) ---");
console.log("===============================");
// THE PROBLEM: Take an array [1, 2, 2, 3] and return [1, 2, 3].
// THE TRICK: Use a Set. Sets CANNOT hold duplicates.

function removeDuplicates(arr) {
  // 1. Turn Array into Set (Duplicates disappear instantly)
  const uniqueSet = new Set(arr);

  // 2. Turn Set back into Array
  // We use the Spread Operator (...)
  return [...uniqueSet];
}

const messyArray = [1, 5, 1, 6, 8, 5, 5, 1];
console.log("Original:", messyArray);
console.log("Cleaned:", removeDuplicates(messyArray));
