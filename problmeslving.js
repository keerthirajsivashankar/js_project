// Hey man! This is your Problem Solving Starter Kit.
// These 3 patterns solve about 50% of "Easy" interview questions.

console.log("===============================");
console.log("--- PATTERN 1: FREQUENCY COUNTER ---");
console.log("===============================");
// THE PROBLEM: Find the character that appears the most in a string.
// THE TRICK: Use an object {} as a "HashMap" to count.

function maxChar(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";

  // 1. Loop through string and build the map
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  console.log("Map Created:", charMap);

  // 2. Loop through the map to find the winner
  // (We use 'for...in' for objects)
  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log("Most frequent char in 'javascript':", maxChar("javascript"));
// Output: 'a' (appears twice)

console.log("\n===============================");
console.log("--- PATTERN 2: TWO POINTERS ---");
console.log("===============================");
// THE PROBLEM: Check if a string is a Palindrome (reads same forwards and backwards).
// THE TRICK: Don't use .reverse(). Use two variables (pointers) at start and end.

function isPalindrome(str) {
  // Pointer 1: Start
  let left = 0;
  // Pointer 2: End
  let right = str.length - 1;

  while (left < right) {
    // Check if characters don't match
    if (str[left] !== str[right]) {
      return false; // Fail immediately!
    }

    // Move pointers closer to the middle
    left++;
    right--;
  }

  return true; // If we finish the loop, it's a match!
}

console.log("Is 'racecar' a palindrome?", isPalindrome("racecar")); // true
console.log("Is 'hello' a palindrome?", isPalindrome("hello")); // false

console.log("\n===============================");
console.log("--- PATTERN 3: MODULO OPERATOR (%) ---");
console.log("===============================");
// THE PROBLEM: FizzBuzz.
// Print numbers 1 to 15.
// If div by 3 -> "Fizz"
// If div by 5 -> "Buzz"
// If div by 3 AND 5 -> "FizzBuzz"

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // ALWAYS check the most specific condition first (3 AND 5)
    // i % 15 === 0 is a shortcut for (i % 3 === 0 && i % 5 === 0)
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log("--- Running FizzBuzz(15) ---");
fizzBuzz(15);
