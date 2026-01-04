// "use strict";
// ^ Uncommenting this line enables Strict Mode.
// It prevents using undeclared variables (x = 5) and safer coding.

const display = document.getElementById("storage-display");

// --- 1. STORAGE LOGIC ---

function saveLocal() {
  // SAVES FOREVER
  localStorage.setItem("theme", "dark-mode");
  display.innerText = `LocalStorage: 'theme' = '${localStorage.getItem(
    "theme"
  )}'\n(Close browser & reopen, it stays!)`;
}

function saveSession() {
  // SAVES FOR THIS TAB ONLY
  sessionStorage.setItem("cartItems", "5");
  display.innerText = `SessionStorage: 'cartItems' = '${sessionStorage.getItem(
    "cartItems"
  )}'\n(Close tab & reopen, it's GONE!)`;
}

function saveCookie() {
  // SAVES AND SENDS TO SERVER
  // Expires in 1 day
  document.cookie = "authToken=XYZ123; max-age=86400; path=/";
  display.innerText = `Cookie Set: ${document.cookie}\n(This gets sent to the backend automatically)`;
}

// --- 2. DEBUGGING LOGIC ---

const users = [
  { id: 1, name: "Alex", role: "Dev" },
  { id: 2, name: "Sam", role: "Designer" },
  { id: 3, name: "Jordan", role: "Manager" },
];

function debugTable() {
  console.clear();
  console.log("--- console.table() ---");
  // Instead of expanding 3 objects, you see a clean Excel-like table
  console.table(users);
  alert("Check your Console! It's a table now.");
}

function debugTime() {
  console.clear();
  console.log("--- console.time() ---");

  // Start the timer
  console.time("Heavy Calculation");

  // Simulate work
  let total = 0;
  for (let i = 0; i < 1000000; i++) {
    total += i;
  }

  // Stop the timer and log time
  console.timeEnd("Heavy Calculation");
  alert("Check Console for exact execution time.");
}

function debugPause() {
  console.log("About to pause...");

  // This is a programmatic BREAKPOINT.
  // The browser dev tools will open and FREEZE execution here.
  // You can hover over variables to inspect them.
  debugger;

  console.log("Resumed!");
  alert("Did the code pause? (Only works if DevTools is open)");
}
