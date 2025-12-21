// Hey man! This is the "Weird Parts" of JavaScript.
// This handles Types, Coercion, and Equality.
// Run this to see the madness in action.

console.log("===============================");
console.log("--- 1. == vs === (Equality) ---");
console.log("===============================");

// THE GOLDEN RULE: Always use === (Strict Equality).
// == (Loose Equality) allows Coercion (auto-conversion).

console.log("1. Loose (==):");
console.log(5 == "5"); // true (String "5" becomes Number 5)
console.log(true == 1); // true (true becomes 1)
console.log(null == undefined); // true (Special rule: they are equal loosely)

console.log("\n2. Strict (===):");
console.log(5 === "5"); // false (Different types!)
console.log(true === 1); // false
console.log(null === undefined); // false

console.log("\n===============================");
console.log("--- 2. TRUTHY vs FALSY ---");
console.log("===============================");

// In JS, everything is "Truthy" EXCEPT these 6 "Falsy" values:
// 1. false
// 2. 0 (zero)
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN (Not a Number)

function checkTruth(val) {
  // The double-bang (!!) converts any value to a real boolean
  console.log(`Value: [${val}] -> isTruthy? ${!!val}`);
}

checkTruth(0); // false
checkTruth("0"); // true  (String "0" is not empty!)
checkTruth([]); // true  (Empty array is an Object, and Objects are truthy!)
checkTruth({}); // true
checkTruth(undefined); // false

console.log("\n===============================");
console.log("--- 3. TYPE COERCION (Math) ---");
console.log("===============================");

// A. The '+' Operator favors STRINGS
// If one side is a string, JS turns everything into a string.
console.log("1 + '1' =", 1 + "1"); // "11"
console.log("'5' + 10 =", "5" + 10); // "510"

// B. The '-', '*', '/' Operators favor NUMBERS
// JS knows you can't subtract strings, so it tries to make them numbers.
console.log("'5' - 1 =", "5" - 1); // 4 (String "5" became Number 5)
console.log("'10' * '2' =", "10" * "2"); // 20

// C. The "WTF" Moment
// Adding arrays?
// 1. [] becomes "" (empty string)
// 2. {} becomes "[object Object]"
console.log("[] + [] =", [] + []); // "" (Empty string)
console.log("[] + {} =", [] + {}); // "[object Object]"

console.log("\n===============================");
console.log("--- 4. INTERVIEW TRAP: NaN ---");
console.log("===============================");

// NaN stands for "Not a Number", but its type is... Number.
console.log("typeof NaN:", typeof NaN); // "number" (lol)

// NaN is the ONLY value in JS that is not equal to itself.
console.log("NaN === NaN?", NaN === NaN); // false!

// How to check for it?
console.log("isNaN('hello'):", isNaN("hello")); // true (Because 'hello' converts to NaN)
console.log("Number.isNaN('hello'):", Number.isNaN("hello")); // false (Strict check)
