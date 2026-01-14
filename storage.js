// Hey man! This is your Storage Playground.
// Run this in a Browser Console (Node.js doesn't have window/storage).

console.log("========================================");
console.log("--- 1. LOCAL STORAGE (Persistent) ---");
console.log("========================================");
// Data here survives browser restarts.

// A. SET (Create/Update)
// Keys and Values must be STRINGS.
localStorage.setItem("username", "Alex_Dev");
localStorage.setItem("theme", "dark");

// Storing Objects? You MUST use JSON.stringify()
const userSettings = { notifications: true, volume: 80 };
localStorage.setItem("settings", JSON.stringify(userSettings));

console.log("✅ LocalStorage Saved!");

// B. GET (Read)
const user = localStorage.getItem("username");
console.log("1. Get Username:", user);

// Parsing Objects back
const rawSettings = localStorage.getItem("settings");
const parsedSettings = JSON.parse(rawSettings);
console.log("2. Get Settings Object:", parsedSettings.volume); // 80

// C. REMOVE (Delete one)
localStorage.removeItem("theme");
console.log("3. Theme removed. Check:", localStorage.getItem("theme")); // null

// D. CLEAR (Delete ALL)
// localStorage.clear(); // Be careful with this!

console.log("\n========================================");
console.log("--- 2. SESSION STORAGE (Temporary) ---");
console.log("========================================");
// Data here dies when the TAB is closed.
// It has the EXACT same API as localStorage.

sessionStorage.setItem("current_step", "payment_page");
sessionStorage.setItem(
  "temp_form_data",
  JSON.stringify({ email: "test@test.com" })
);

console.log("✅ SessionStorage Saved!");
console.log("1. Current Step:", sessionStorage.getItem("current_step"));

// Prove it's separate from LocalStorage
console.log("2. Is 'username' in Session?", sessionStorage.getItem("username")); // null

console.log("\n========================================");
console.log("--- 3. COOKIES (The Old School / Server) ---");
console.log("========================================");
// Cookies are messy in raw JS. They are just one long string.

// A. SET
// You set them one by one, but they get added to the list.
document.cookie = "auth_token=XYZ_TOKEN_123; path=/; max-age=3600"; // Expires in 1hr
document.cookie = "language=en-US";

console.log("✅ Cookies Set!");

// B. GET (The Hard Part)
// document.cookie returns "key1=val1; key2=val2; ..."
console.log("1. Raw Cookie String:", document.cookie);

// You usually need a helper function to find a specific cookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

console.log("2. Get 'language':", getCookie("language"));

// C. DELETE
// You can't just "delete". You have to set it again with a past date.
document.cookie = "language=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
console.log("3. Deleted 'language'. Check:", getCookie("language")); // null

console.log("\n========================================");
console.log("--- 4. STORAGE EVENT (Cross-Tab Sync) ---");
console.log("========================================");
// Interview Tip: "How do I sync state between two open tabs?"
// Answer: "The 'storage' event fires when LocalStorage changes in ANOTHER tab."

window.addEventListener("storage", (e) => {
  console.log(`🔔 ALERT! Storage changed in another tab!`);
  console.log(`Key: ${e.key}, New Value: ${e.newValue}`);
});

console.log(
  "(Open this file in a SECOND tab and run: localStorage.setItem('test', '123') to see the event fire here!)"
);
