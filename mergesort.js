// Hey man! This is "Divide and Conquer" in action.
// We are building O(N log N) sorting algorithms.

console.log("===============================");
console.log("--- 1. MERGE SORT (The Stable King) ---");
console.log("===============================");
// Logic: Split array in half until they are size 0 or 1.
// Then "Merge" them back together in sorted order.

// HELPER: Merges two already sorted arrays
function merge(left, right) {
  let sorted = [];
  
  // While both arrays have stuff in them
  while (left.length && right.length) {
    // Pick the smaller one
    if (left[0] < right[0]) {
      sorted.push(left.shift()); // Remove from left, add to sorted
    } else {
      sorted.push(right.shift()); // Remove from right, add to sorted
    }
  }
  
  // Combine whatever is left (one array will be empty)
  return [...sorted, ...left, ...right];
}

function mergeSort(arr) {
  // Base Case: Arrays with 0 or 1 item are already sorted
  if (arr.length <= 1) return arr;

  // 1. Split in half
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // 2. Merge the sorted halves
  return merge(left, right);
}

const nums = [5, 1, 9, 2, 7, 6];
console.log("Merge Sort [5, 1, 9, 2, 7, 6]:", mergeSort(nums));


console.log("\n===============================");
console.log("--- 2. QUICK SORT (The Speed Demon) ---");
console.log("===============================");
// Logic: Pick a "Pivot". Throw smaller stuff to Left, bigger stuff to Right.
// Repeat for Left and Right.

function quickSort(arr) {
  // Base Case
  if (arr.length <= 1) return arr;

  // 1. Pick a Pivot (We'll just take the last item)
  const pivot = arr[arr.length - 1];
  
  // 2. Partition
  const left = [];
  const right = [];
  
  // Loop through everything EXCEPT the pivot
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // 3. Combine: Sorted Left + Pivot + Sorted Right
  // Recursion happens here
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const nums2 = [10, 80, 30, 90, 40, 50, 70];
console.log("Quick Sort [10, 80, 30, 90, 40, 50, 70]:", quickSort(nums2));


console.log("\n===============================");
console.log("--- 3. BUILT-IN SORT (The Interview Gotcha) ---");
console.log("===============================");
// Never forget that JS sorts by STRING by default.

const messy = [2, 10, 1, 200];

console.log("Default .sort():", messy.sort()); 
// Output: [1, 10, 2, 200] (Alphabetical order! 1 comes before 2)

// THE FIX:
console.log("Correct .sort():", messy.sort((a, b) => a - b)); 
// Output: [1, 2, 10, 200]