// Hey man! This is your guide to Generators.
// The only function type that can be PAUSED.

console.log("===============================");
console.log("--- 1. BASIC SYNTAX ---");
console.log("===============================");

// Notice the asterisk (*). This tells JS it's a Generator.
function* simpleGenerator() {
  console.log("1. Function Started");

  // PAUSE 1
  yield "First Pause Point";

  console.log("2. Resumed!");

  // PAUSE 2
  yield "Second Pause Point";

  console.log("3. Finished!");
  return "Done";
}

// 1. Initialize (Put the DVD in)
// This DOES NOT run the code yet. It returns a "Generator Object".
const gen = simpleGenerator();

console.log("--- Generator Created (Code hasn't run yet) ---");

// 2. Press Play (First time)
// It runs until it hits the first 'yield'.
console.log("\nCalling .next()...");
const result1 = gen.next();
console.log("Result 1:", result1);
// Output: { value: "First Pause Point", done: false }

// 3. Press Play (Second time)
// It wakes up, runs log "2. Resumed!", and hits the second 'yield'.
console.log("\nCalling .next() again...");
const result2 = gen.next();
console.log("Result 2:", result2);
// Output: { value: "Second Pause Point", done: false }

// 4. Press Play (Final time)
console.log("\nCalling .next() one last time...");
const result3 = gen.next();
console.log("Result 3:", result3);
// Output: { value: "Done", done: true } (Notice done is TRUE now)

console.log("\n===============================");
console.log("--- 2. PRACTICAL USE: INFINITE ID MAKER ---");
console.log("===============================");
// Interviewer: "Create a function that gives a unique ID every time I call it, forever."
// Problem: An infinite loop (while(true)) usually crashes the browser.
// Solution: Generators allow infinite loops because they PAUSE!

function* idMaker() {
  let id = 1;
  while (true) {
    // Return the current ID, then PAUSE and wait for next call.
    yield id;
    id++;
  }
}

const ids = idMaker();

console.log("ID 1:", ids.next().value); // 1
console.log("ID 2:", ids.next().value); // 2
console.log("ID 3:", ids.next().value); // 3
// We can do this forever. It remembers the 'id' variable state.

console.log("\n===============================");
console.log("--- 3. CUSTOM ITERATORS ---");
console.log("===============================");
// Generators work automatically with 'for...of' loops.

function* fruitBasket() {
  yield "Apple";
  yield "Banana";
  yield "Cherry";
}

console.log("Looping through generator:");
for (const fruit of fruitBasket()) {
  console.log("Fruit:", fruit);
}
// It automatically calls .next() for you until 'done' is true.
