// Hey man! This is the "Turbo Button" for your async code.
// We will simulate API calls to see the speed difference.

// --- SETUP: A FAKE API ---
const fakeFetch = (name, time, shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(`❌ ${name} Failed!`);
      } else {
        console.log(`✅ ${name} finished (${time}ms)`);
        resolve(`${name} Data`);
      }
    }, time);
  });
};

console.log("===============================");
console.log("--- 1. THE TRAP (Sequential) ---");
console.log("===============================");
// Don't run this section with the others or logs will get mixed up.
// Just read the logic.

/*
async function sequential() {
  const start = Date.now();
  
  // We wait for one to finish before starting the next.
  await fakeFetch("User", 2000);
  await fakeFetch("Posts", 2000);
  await fakeFetch("Friends", 2000);
  
  console.log(`Sequential Total Time: ${Date.now() - start}ms`); 
  // Result: ~6000ms (SLOW!)
}
*/

console.log("\n===============================");
console.log("--- 2. PROMISE.ALL (Parallel) ---");
console.log("===============================");
// Use this when you need ALL the data to succeed.
// If ONE fails, everything fails (Fail-Fast).

async function parallelAll() {
  console.log("--- Starting Promise.all ---");
  const start = Date.now();

  try {
    // We start all 3 triggers immediately.
    // Promise.all takes an ARRAY of promises.
    const results = await Promise.all([
      fakeFetch("User", 1000),
      fakeFetch("Posts", 2000), // The slowest one determines the total time
      fakeFetch("Friends", 500),
    ]);

    // results is an array: [UserData, PostsData, FriendsData]
    console.log("🎉 Promise.all Results:", results);
    console.log(`⏱️ Total Time: ${Date.now() - start}ms`);
    // Result: ~2000ms (Much Faster!)
  } catch (error) {
    console.log("Promise.all Error:", error);
  }
}
parallelAll();

console.log("\n===============================");
console.log("--- 3. PROMISE.ALLSETTLED (The Safe One) ---");
console.log("===============================");
// Use this when you want everything to run, even if some fail.
// It NEVER throws an error.

async function parallelSettled() {
  // Wait for the previous example to finish logs...
  await new Promise((r) => setTimeout(r, 2500));

  console.log("\n--- Starting Promise.allSettled ---");

  const results = await Promise.allSettled([
    fakeFetch("Important Data", 1000),
    fakeFetch("Optional Data", 500, true), // This will FAIL
  ]);

  // It gives you an array of OBJECTS describing what happened.
  // { status: 'fulfilled', value: ... } OR { status: 'rejected', reason: ... }
  console.log("🛡️ Promise.allSettled Results:", results);
}
parallelSettled();

console.log("\n===============================");
console.log("--- 4. PROMISE.RACE (The Timeout Pattern) ---");
console.log("===============================");
// Use this to set a limit. "If the API takes too long, cancel it."
// Whichever promise finishes FIRST wins.

async function raceDemo() {
  // Wait for previous logs...
  await new Promise((r) => setTimeout(r, 4500));

  console.log("\n--- Starting Promise.race ---");

  try {
    const result = await Promise.race([
      fakeFetch("Fast API", 5000), // Slow API
      fakeFetch("Timeout Limit", 1000, true), // Fast Error (Timeout)
    ]);
    console.log(result);
  } catch (error) {
    console.log("🏁 Race Result: Task timed out!", error);
  }
}
raceDemo();
