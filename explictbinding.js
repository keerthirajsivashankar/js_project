// Hey man! This is the "Control Panel" for the 'this' keyword.
// Run this in your console.

console.log("===============================");
console.log("--- THE SETUP ---");
console.log("===============================");

// 1. An object with a method
const pilot = {
  name: "Maverick",
  rank: "Captain",
  // This function relies on 'this'
  fly: function (plane, speed) {
    console.log(
      `${this.rank} ${this.name} is flying the ${plane} at ${speed} MPH.`
    );
  },
};

// 2. An object WITHOUT the method
const rookie = {
  name: "Goose",
  rank: "Lieutenant",
  // Note: Goose does NOT have a fly() function!
};

// Normal usage:
console.log("1. Normal call:");
pilot.fly("F-14", 800);
// Output: Captain Maverick is flying the F-14 at 800 MPH.

console.log("\n===============================");
console.log("--- 1. .call() (The Direct Method) ---");
console.log("===============================");
// Goal: We want 'rookie' to use 'pilot.fly', using HIS own name/rank.
// Syntax: function.call(whoShouldBeThis, arg1, arg2, ...)

console.log("2. Using .call() to let Goose fly:");

// "Hey pilot.fly, run right now, but treat 'this' as 'rookie'."
pilot.fly.call(rookie, "F-18", 900);
// Output: Lieutenant Goose is flying the F-18 at 900 MPH.

// MEMORY HOOK: "C" for Call = "C" for Comma-separated arguments.

console.log("\n===============================");
console.log("--- 2. .apply() (The Array Method) ---");
console.log("===============================");
// Goal: Same as call, but we have the arguments in an array.
// Syntax: function.apply(whoShouldBeThis, [arg1, arg2, ...])

const flightDetails = ["Mig-28", 1200];

console.log("3. Using .apply() with an array:");

pilot.fly.apply(rookie, flightDetails);
// Output: Lieutenant Goose is flying the Mig-28 at 1200 MPH.

// MEMORY HOOK: "A" for Apply = "A" for Array.

console.log("\n===============================");
console.log("--- 3. .bind() (The Permanent Fix) ---");
console.log("===============================");
// Goal: We don't want to run it NOW. We want to create a NEW function
// where 'this' is PERMANENTLY locked to 'rookie', to use later.
// Syntax: const newFn = function.bind(whoShouldBeThis)

console.log("4. Using .bind() to create a new function:");

// This DOES NOT run the function yet. It returns a copy.
const gooseFlies = pilot.fly.bind(rookie);

console.log("(Function created... waiting to be called...)");

// Later in the code...
gooseFlies("Stealth Bomber", 2000);
// Output: Lieutenant Goose is flying the Stealth Bomber at 2000 MPH.

// You can even preset arguments!
// Create a function where Goose ALWAYS flies a Cessna.
const gooseFiesCessna = pilot.fly.bind(rookie, "Cessna");
gooseFiesCessna(100);
// Output: Lieutenant Goose is flying the Cessna at 100 MPH.

console.log("\n===============================");
console.log("--- INTERVIEW SUMMARY ---");
console.log("===============================");
// Q: What is the difference between call, apply, and bind?
// A:
// 1. CALL runs immediately, arguments are separated by commas.
// 2. APPLY runs immediately, arguments are in an Array.
// 3. BIND returns a NEW function with 'this' locked in, to run later.
