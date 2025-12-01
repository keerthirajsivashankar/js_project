// Hey man! This is the "Modern Syntax" Toolkit.
// These features make your code cleaner, safer, and more "React-like".

console.log("===============================");
console.log("--- 1. DESTRUCTURING (Unpacking) ---");
console.log("===============================");

// A. OBJECT DESTRUCTURING
// The Old Way:
const user = {
  id: 42,
  username: "jdoe",
  details: {
    email: "jdoe@example.com",
    active: true,
  },
};
// const id = user.id;
// const email = user.details.email;

// The Modern Way:
// We "unpack" properties directly into variables.
const { id, username } = user;
console.log("1. Simple Destructure:", id, username); // 42, "jdoe"

// Nested Destructuring + Renaming
// "Go into details, get email, but call it 'userEmail'"
const {
  details: { email: userEmail },
} = user;
console.log("2. Nested & Renamed:", userEmail); // "jdoe@example.com"

// B. ARRAY DESTRUCTURING
// This is exactly how React Hooks work: const [state, setState] = useState(0)
const rgb = [255, 200, 0];

// The Old Way:
// const red = rgb[0];
// const green = rgb[1];

// The Modern Way:
// Order matters here!
const [red, green, blue] = rgb;
console.log("3. Array Destructure:", red, green, blue);

// Swapping Variables (The coolest trick)
let a = "A";
let b = "B";
[a, b] = [b, a]; // No temporary variable needed!
console.log("4. Variable Swap:", a, b); // "B", "A"

console.log("\n===============================");
console.log("--- 2. OPTIONAL CHAINING (?.) ---");
console.log("===============================");
// The Problem: Accessing deep data when a parent might be missing.

const adventurer = {
  name: "Link",
  cat: {
    name: "Navi",
  },
};

// Error Scenario:
// console.log(adventurer.dog.name);
// CRASH! "Cannot read properties of undefined (reading 'name')" because .dog is undefined.

// The Fix (?.)
// "Try to access dog. If dog is undefined, STOP and return undefined. Don't crash."
console.log("1. Safe Access:", adventurer.dog?.name); // undefined (No crash!)

// Works with methods too!
// "If .bark() exists, call it. If not, do nothing."
console.log("2. Method Check:", adventurer.dog?.bark?.()); // undefined

console.log("\n===============================");
console.log("--- 3. NULLISH COALESCING (??) ---");
console.log("===============================");
// The Problem: Using || to set defaults is buggy.
// || treats 0 and "" as false.

const settings = {
  animationDuration: 0, // 0 is a valid number!
  showIntro: false, // false is valid!
};

// The Old Way (Buggy):
// 0 is "falsy", so it falls back to 300. BAD!
const durationOld = settings.animationDuration || 300;
console.log("1. Old Way (||):", durationOld); // 300 (Wrong!)

// The Modern Way (??):
// Only falls back if value is NULL or UNDEFINED.
// It respects 0 and false.
const durationNew = settings.animationDuration ?? 300;
console.log("2. New Way (??):", durationNew); // 0 (Correct!)

const showIntro = settings.showIntro ?? true;
console.log("3. Boolean Check (??):", showIntro); // false (Correct!)
