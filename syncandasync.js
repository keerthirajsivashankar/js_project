// Hey man! This is the battle: Sync vs. Async.

console.log("===============================");
console.log("--- SCENARIO 1: Synchronous (Blocking) ---");
console.log("===============================");
// Imagine this is a slow function, like a complex math calculation.
// It runs on the MAIN THREAD.

console.log("1. Start Sync Task");

function massiveLoop() {
  // This loop simulates a lot of work.
  // JavaScript CANNOT do anything else while this is running.
  let count = 0;
  for (let i = 0; i < 1000000000; i++) {
    count++;
  }
  console.log("2. Sync Task Finished (Phew!)");
}

massiveLoop(); // The code STOPS here until this finishes.

console.log("3. End of Sync Section");
// Notice: "3" DOES NOT print until "2" is done. This is "Blocking".

console.log("\n\n===============================");
console.log("--- SCENARIO 2: Asynchronous (Non-Blocking) ---");
console.log("===============================");
// Imagine this is a network request or a timer.
// We use 'setTimeout' to simulate a delay (like fetching data).

console.log("1. Start Async Task");

setTimeout(() => {
  // This code runs LATER, after 2 seconds.
  console.log("2. [ASYNC] Timer finished (Data arrived!)");
}, 2000); // 2000ms = 2 seconds

console.log("3. End of Async Section");

// LOOK AT THE OUTPUT ORDER!
// You will see:
// 1. Start Async Task
// 3. End of Async Section  <-- THIS RUNS BEFORE THE TIMER FINISHES!
// ... (2 seconds later) ...
// 2. [ASYNC] Timer finished

console.log("... (App continues running while waiting for timer) ...");
