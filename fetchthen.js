// Hey man! This is your guide to fetching data from APIs.
// We'll use JSONPlaceholder (a free fake API) for testing.

console.log("========================================");
console.log("--- 1. THE CLASSIC WAY (.then chain) ---");
console.log("========================================");

// This reads like a chain of instructions.
// Good to know because you'll see it in older tutorials.

function fetchClassic() {
  console.log("⏳ Classic: Starting fetch...");

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      // Step 1: The server responded!
      // But we just have headers, not the data body yet.
      console.log("Classic: Got response!", response.status);

      // *Interview Check*: fetch() doesn't throw errors for 404s. Check .ok!
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      // Step 2: Parse the JSON body. This is ALSO async.
      return response.json();
    })
    .then((data) => {
      // Step 3: NOW we have the actual data.
      console.log("✅ Classic: Received Data:", data.title);
    })
    .catch((error) => {
      // Step 4: Catch network errors or manual errors thrown above.
      console.error("❌ Classic: Error:", error.message);
    });

  console.log("Classic: This line runs BEFORE the data arrives! (Async proof)");
}

fetchClassic();

console.log("\n========================================");
console.log("--- 2. THE MODERN WAY (Async / Await) ---");
console.log("========================================");

// This reads like synchronous code (top to bottom).
// It's much cleaner, especially for complex logic.

async function fetchModern() {
  // Wait a bit so the logs don't mix with the classic one
  await new Promise((r) => setTimeout(r, 1000));

  console.log("\n⏳ Modern: Starting fetch...");

  try {
    // Await pauses the function here until the promise resolves.
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2"
    );

    // Still need to check .ok!
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    // Await the parsing
    const data = await response.json();

    // Use the data immediately
    console.log("✅ Modern: Received Data:", data.title);
  } catch (error) {
    // All errors (network or manual) jump here immediately
    console.error("❌ Modern: Error:", error.message);
  }
}

fetchModern();

console.log("\n========================================");
console.log("--- 3. PRO TIP: PARALLEL REQUESTS ---");
console.log("========================================");

// Common Interview Question: "How do I fetch two things at once?"
// Don't await them one by one! That's slow. Use Promise.all.

async function fetchParallel() {
  // Wait for previous logs
  await new Promise((r) => setTimeout(r, 2000));

  console.log("\n🚀 Parallel: Fetching Post & User together...");
  const start = Date.now();

  try {
    // This fires both requests instantly without waiting for the first to finish.
    const [postRes, userRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/3"),
      fetch("https://jsonplaceholder.typicode.com/users/1"),
    ]);

    const postData = await postRes.json();
    const userData = await userRes.json();

    console.log(`✅ Parallel: Done in ${Date.now() - start}ms`);
    console.log("   Post:", postData.title);
    console.log("   User:", userData.name);
  } catch (error) {
    console.error("❌ Parallel: One of them failed!", error);
  }
}

fetchParallel();
