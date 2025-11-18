// Hey man! This is your guide to 'fetch()'.
// We'll use a free, fake API called JSONPlaceholder.
// This URL will give us a single to-do item.
const API_URL = "https://jsonplaceholder.typicode.com/todos/1";

console.log("--- 1. Using .then().catch() (The Classic Way) ---");
console.log("Sending request...");

fetch(API_URL)
  .then((response) => {
    // 1. The 'buzzer' went off! We have a 'response'.
    // This isn't the data yet, just the HTTP response (like 200 OK, 404 Not Found).
    console.log("Got response:", response.status, response.statusText);

    // *INTERVIEW GOTCHA*: 'fetch' doesn't error on 404s. You MUST check!
    if (!response.ok) {
      // If the response is not 200-299, we create our own error.
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 2. We ask for the data as JSON. This is *also* async!
    // So we return another promise.
    return response.json();
  })
  .then((data) => {
    // 3. This '.then()' waits for the response.json() to finish.
    // NOW we finally have our data.
    console.log("Got data (Classic):", data);
  })
  .catch((error) => {
    // 4. This '.catch()' is the safety net.
    // It will catch *any* error from the fetch or our 'throw new Error'.
    console.error("Error (Classic):", error.message);
  });
//

console.log("\n--- This log runs BEFORE the .then() data comes back! ---");
console.log("This proves the code is asynchronous. Our app didn't freeze.\n");

// -----------------------------------------------------------------

console.log("\n--- 2. Using async/await (The Modern Way) ---");
console.log("Sending request (async)...");

// 1. We MUST wrap our code in an 'async' function.
async function getTodoData() {
  // 2. We use 'try...catch' for error handling (our safety net).
  try {
    // 3. 'await' PAUSES the function until the promise settles.
    // This is like waiting for the buzzer.
    const response = await fetch(API_URL);

    // 4. The same "gotcha" check.
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 5. 'await' again to get the JSON data.
    const data = await response.json();

    // 6. NOW we have the data. Look how clean and readable this is!
    console.log("Got data (Async/Await):", data);
  } catch (error) {
    // 7. If anything in the 'try' block fails, this 'catch' block runs.
    console.error("Error (Async/Await):", error.message);
  }
}

// 8. Call the function to make it run!
getTodoData();
//
