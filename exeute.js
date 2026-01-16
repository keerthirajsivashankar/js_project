// Hey man! This code visualizes how the JS Engine thinks.
// Read the logs carefully to see the "Two-Phase" system in action.

console.log("===============================");
console.log("--- 1. GLOBAL EXECUTION CONTEXT ---");
console.log("===============================");

/*
  SCENARIO:
  We have a global variable 'x'.
  We have a function 'a' that calls function 'b'.
*/

var x = 10;

function a() {
  var y = 5;
  console.log("Inside a(): Calling b()...");
  b();
  console.log("Inside a(): b() finished.");
}

function b() {
  console.log("Inside b(): I am running!");
}

// --- PHASE 1: MEMORY CREATION (The Scan) ---
// JS engine scans the file BEFORE running any line.
// 1. Allocates memory for 'x' -> undefined
// 2. Allocates memory for 'a' -> function definition {...}
// 3. Allocates memory for 'b' -> function definition {...}

console.log("--- PHASE 2: EXECUTION (Line by Line) ---");

// Line 14: x = 10 (Assignment happens here)
console.log("Global: 'x' is now assigned 10.");

// Line 16: Function 'a' is skipped (already stored in memory)
// Line 23: Function 'b' is skipped (already stored in memory)

console.log("Global: Calling a()...");

// --- FUNCTION EXECUTION CONTEXT (Created when 'a' is called) ---
a();
/*
  Inside a():
  1. Memory Phase: 
     - Allocate 'y' -> undefined
  2. Execution Phase:
     - y = 5
     - Call b() -> Creates NEW Context for b
*/

console.log("Global: Execution Finished.");

console.log("\n===============================");
console.log("--- 2. THE CALL STACK (The Stack Trace) ---");
console.log("===============================");
// The Call Stack tracks "Where am I right now?"

function first() {
  console.log("1. Pushed 'first' to Stack");
  second();
  console.log("4. Popped 'first' from Stack");
}

function second() {
  console.log("2. Pushed 'second' to Stack");
  third();
  console.log("3. Popped 'second' from Stack");
}

function third() {
  console.log("   --> I am at the top of the stack!");
  // console.trace() prints the actual stack to the console!
  console.trace("Stack Trace Visualized:");
}

first();

console.log("\n===============================");
console.log("--- 3. HOISTING PROOF (Creation Phase) ---");
console.log("===============================");

// Because of Phase 1 (Memory Creation), we can use things BEFORE they are defined.

console.log("Value of 'myVar' before definition:", myVar);
// Output: undefined (It exists in memory, but no value yet)

var myVar = "I am defined now!";

console.log("Value of 'myFunc' before definition:");
myFunc();
// Output: "I work!" (Functions are fully stored in Phase 1)

function myFunc() {
  console.log("   I work because I was Hoisted!");
}
