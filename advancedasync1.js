// Hey man! This is the "Ghost" that creates bugs in Search Bars.
// We are going to simulate a slow network to see the race condition.

console.log("===============================");
console.log("--- 1. THE SETUP (Fake Slow API) ---");
console.log("===============================");

// This simulates a server that takes a random amount of time (0-3s)
function searchAPI(query) {
  return new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 3000);

    // Check for 'signal' inside the promise logic (simulated below)
    setTimeout(() => {
      console.log(`✅ API Finished for: "${query}" (${time}ms)`);
      resolve(`Results for ${query}`);
    }, time);
  });
}

console.log("\n===============================");
console.log("--- 2. THE BUG (Race Condition) ---");
console.log("===============================");
// Scenario: User types "A", then "B".
// "A" takes 3s. "B" takes 1s.
// "B" finishes first. "A" overwrites it 2 seconds later.

let currentUI = ""; // What the user sees on screen

function buggedSearch(query) {
  console.log(`🔍 Searching for: "${query}"...`);

  searchAPI(query).then((result) => {
    // ❌ THE BUG: We blindly update the UI whenever a promise finishes.
    // We don't check if this result is still relevant!
    currentUI = result;
    console.log(`🖥️ UI UPDATED to: [ ${currentUI} ] (Might be wrong!)`);
  });
}

// SIMULATION:
// buggedSearch("React"); // Slow request
// setTimeout(() => buggedSearch("React Native"), 500); // Fast request
// (Result: React Native finishes first. Then React finishes and overwrites it. WRONG.)

console.log("\n===============================");
console.log("--- 3. THE FIX (AbortController) ---");
console.log("===============================");
// This is the standard way to cancel fetch requests in 2024.

// 1. We keep a reference to the active controller
let activeController = null;

async function safeSearch(query) {
  // 2. If there is a pending request, CANCEL it.
  if (activeController) {
    console.log(`🛑 Cancelling previous request...`);
    activeController.abort(); // Sends the "abort" signal
  }

  // 3. Create a new controller for the new request
  activeController = new AbortController();
  const { signal } = activeController;

  console.log(`🔍 Safe-Searching for: "${query}"...`);

  try {
    // 4. Pass the 'signal' to fetch (or our fake API)
    // REAL FETCH EXAMPLE: fetch(url, { signal })

    const result = await new Promise((resolve, reject) => {
      const time = Math.floor(Math.random() * 2000);

      const timer = setTimeout(() => {
        resolve(`Correct Results for ${query}`);
      }, time);

      // 5. Listen for the abort signal
      signal.addEventListener("abort", () => {
        clearTimeout(timer); // Stop the work
        reject(new DOMException("Aborted", "AbortError"));
      });
    });

    // 6. Update UI only if we succeeded
    currentUI = result;
    console.log(`✨ UI SAFELY UPDATED: [ ${currentUI} ]`);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log(`✋ Ignore results for "${query}" (It was cancelled)`);
    } else {
      console.error("Real Error:", error);
    }
  }
}

// SIMULATION
console.log("--- Starting Simulation ---");
safeSearch("A"); // User types 'A'
setTimeout(() => safeSearch("AB"), 100); // User types 'AB' quickly
setTimeout(() => safeSearch("ABC"), 200); // User types 'ABC' quickly
