// Hey man! This is your "API Fetching" starter kit.
// We are using JSONPlaceholder, a free fake API for testing.

console.log("===============================");
console.log("--- 1. THE MODERN WAY (Async/Await) ---");
console.log("===============================");
// This is what you should use in 99% of interviews and apps.
// It looks like synchronous code, but it doesn't freeze the page.

async function fetchPost() {
  console.log("⏳ 1. Fetching post data...");

  try {
    // A. Send the request (Get the "Buzzer")
    // fetch() returns a Promise. 'await' pauses here until it finishes.
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    // B. Check if the server is happy (Status 200-299)
    // *Interview Tip*: fetch() does NOT throw errors on 404s. You must check .ok!
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    // C. Extract the JSON body (This is also async!)
    // The response body is a stream, we need to read it completely.
    const data = await response.json();

    // D. Use the data
    console.log("✅ 2. Success! Here is the data object:");
    console.log(data);

    // Example accessing specific fields
    console.log(`\nTitle: "${data.title}"`);
    console.log(`Body: "${data.body}"`);
  } catch (error) {
    // E. Catch network errors (like no internet)
    console.error("❌ Something went wrong:", error.message);
  }
}

// Run the function
fetchPost();

console.log("\n===============================");
console.log("--- 2. THE CLASSIC WAY (.then) ---");
console.log("===============================");
// You will see this in older tutorials. It works the same way but uses chaining.

console.log("⏳ 3. Fetching a random dog...");

fetch("https://dog.ceo/api/breeds/image/random") // A different cool API!
  .then((response) => {
    if (!response.ok) throw new Error("Request failed");
    return response.json();
  })
  .then((data) => {
    // This runs AFTER the previous .then() finishes
    console.log("\n🐶 4. Random Dog Data:");
    console.log(data);
    console.log("Image URL:", data.message);
  })
  .catch((error) => {
    console.error("Dog Fetch Error:", error);
  });

/* --- 🌟 OTHER FREE APIS TO PRACTICE WITH 🌟 ---
  
  1. Pokémon API (PokeAPI) - Very detailed data
     URL: https://pokeapi.co/api/v2/pokemon/pikachu
     
  2. Random User Generator - Great for practicing "Contact Lists"
     URL: https://randomuser.me/api/
     
  3. Quotes API - Simple text data
     URL: https://api.quotable.io/random
     
  4. Weather API (Open-Meteo) - No API Key needed!
     URL: https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
*/
