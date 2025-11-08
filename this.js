// ---
// A program to explain the 'this' keyword
// ---

console.log("======================================");
console.log("Scenario 1: 'this' in the Global Scope");
console.log("======================================");
console.log("Running 'console.log(this)' outside of any function...");

// When you're not in any function, 'this' is the "global object".
// In a browser, this is the 'window' object.
console.log(this);

// ---
console.log("\n======================================");
console.log("Scenario 2: 'this' in a Simple Function");
console.log("======================================");
console.log("Running a function called 'sayHi()'...");

function sayHi() {
  // This is the big "GOTCHA"!
  // You might *think* 'this' is the function, but it's not.
  // When you call a function "simply", 'this' defaults
  // back to the global 'window' object.
  console.log("Inside sayHi(), 'this' is:", this);
}

// A "simple" call. Nothing is "calling" it.
sayHi();

// ---
console.log("\n======================================");
console.log("Scenario 3: 'this' as an Object Method (The Most Important!)");
console.log("======================================");
console.log("Running a method called 'person.greet()'...");

// This is the main reason 'this' exists!
const person = {
  name: "Alex",
  age: 30,
  greet: function () {
    // We called this function using 'person.greet()'.
    // The "caller" is the 'person' object.
    // So, 'this' refers to the object to the left of the dot.
    console.log("Inside greet(), 'this' is the 'person' object:", this);
    console.log(`Hi, my name is ${this.name} and I am ${this.age}.`);
  },
};

//
// Call the function AS A METHOD of 'person'.
person.greet();

// ---
console.log("\n--- The 'Gotcha' (Scenario 2 vs 3) ---");
console.log("What if we 'lose' the 'this' context?");

// Let's take the function from the object
let trickyGreet = person.greet;

// Now, we're calling it as a "simple" function (Scenario 2)
// There's no object to the left of the dot!
console.log("Calling the function 'simply' (trickyGreet())...");
trickyGreet();
// You'll see 'this' is the 'window' again, and 'this.name' is undefined!
// This is because the *way it was called* (simply)
// determines the value of 'this', not where it was defined.
