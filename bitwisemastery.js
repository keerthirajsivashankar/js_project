// Hey man! This is how you manipulate raw binary data.
// It's super fast and makes you look like a wizard.

console.log("===============================");
console.log("--- 1. THE BASICS (Binary) ---");
console.log("===============================");

// To see binary in JS, use .toString(2)
const num = 5; // Binary: 101
console.log(`Number 5 in Binary: ${num.toString(2)}`);

// 1. AND (&) - Both must be 1
// 5 (101) & 1 (001) = 1 (001)
console.log("5 & 1:", 5 & 1);

// 2. OR (|) - Either is 1
// 5 (101) | 2 (010) = 7 (111)
console.log("5 | 2:", 5 | 2);

// 3. XOR (^) - Must be DIFFERENT
// 5 (101) ^ 1 (001) = 4 (100)
console.log("5 ^ 1:", 5 ^ 1);

console.log("\n===============================");
console.log("--- 2. THE COOL TRICKS (Interview Gold) ---");
console.log("===============================");

// TRICK A: Even or Odd?
// The last bit of an ODD number is always 1.
// The last bit of an EVEN number is always 0.
function isOdd(n) {
  return (n & 1) === 1;
}
console.log("Is 5 odd?", isOdd(5)); // true
console.log("Is 8 odd?", isOdd(8)); // false (0)

// TRICK B: Fast Floor (Remove decimals)
// The bitwise OR operator converts floats to 32-bit integers immediately.
console.log("Floor of 5.99:", 5.99 | 0); // 5 (Way faster than Math.floor)

// TRICK C: Swapping Variables (No Temp var!)
let a = 5;
let b = 10;
// XOR Magic:
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(`Swapped: a=${a}, b=${b}`); // a=10, b=5

console.log("\n===============================");
console.log("--- 3. REAL WORLD: PERMISSIONS SYSTEM ---");
console.log("===============================");
// This is how Linux/Unix permissions work.
// Instead of storing 4 booleans, we store ONE number.

// 1. Define Flags (Powers of 2)
const READ = 1; // 0001
const WRITE = 2; // 0010
const EXECUTE = 4; // 0100
const ADMIN = 8; // 1000

// 2. Assign Permissions (Use OR | to combine)
let userPerms = READ | WRITE;
// 0001 | 0010 = 0011 (3)
console.log("User Permissions Code:", userPerms);

// 3. Check Permissions (Use AND & to check)
const canRead = (userPerms & READ) === READ;
const canExecute = (userPerms & EXECUTE) === EXECUTE;

console.log("Can Read?", canRead); // true
console.log("Can Execute?", canExecute); // false

// 4. Toggle Permissions (Use XOR ^ to flip)
userPerms = userPerms ^ WRITE; // Remove Write
console.log("Toggled Write off. New Code:", userPerms); // 1 (Only Read left)
