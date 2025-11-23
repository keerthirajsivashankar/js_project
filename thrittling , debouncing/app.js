// --- SETUP: GET ELEMENTS ---
const input = document.getElementById("input");
const normalDisplay = document.getElementById("normal-count");
const debounceDisplay = document.getElementById("debounce-count");
const throttleDisplay = document.getElementById("throttle-count");

let normalCount = 0;
let debounceCount = 0;
let throttleCount = 0;

// --- 1. THE LOGIC (What you write in an interview) ---

// DEBOUNCE FUNCTION
// "Wait until the user stops doing the action for 'delay' ms"
function debounce(func, delay) {
  let timer; // Closure variable! It persists.

  return function (...args) {
    // If a timer was already running, cancel it!
    // (The user typed again before the delay finished)
    clearTimeout(timer);

    // Start a new timer
    timer = setTimeout(() => {
      // .apply ensures 'this' context is correct if used in an object
      func.apply(this, args);
    }, delay);
  };
}

// THROTTLE FUNCTION
// "Only allow this to run once every 'limit' ms"
function throttle(func, limit) {
  let inThrottle; // Closure variable to track state

  return function (...args) {
    if (!inThrottle) {
      // Run the function immediately
      func.apply(this, args);

      // Set the flag to true
      inThrottle = true;

      // Unblock the flag after the limit passes
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// --- 2. UPDATE FUNCTIONS ---

function updateNormal() {
  normalCount++;
  normalDisplay.innerText = normalCount;
  // Visual flash effect
  normalDisplay.style.color = "white";
  setTimeout(() => (normalDisplay.style.color = ""), 100);
}

function updateDebounce() {
  debounceCount++;
  debounceDisplay.innerText = debounceCount;
  // Visual flash effect
  debounceDisplay.style.color = "white";
  setTimeout(() => (debounceDisplay.style.color = ""), 100);
}

function updateThrottle() {
  throttleCount++;
  throttleDisplay.innerText = throttleCount;
  // Visual flash effect
  throttleDisplay.style.color = "white";
  setTimeout(() => (throttleDisplay.style.color = ""), 100);
}

// --- 3. CONNECTING IT ALL ---

// Create the "Better" versions of our functions
const debouncedUpdate = debounce(updateDebounce, 500); // 500ms delay
const throttledUpdate = throttle(updateThrottle, 1000); // 1s limit

input.addEventListener("input", () => {
  // 1. Run Normal (Always runs)
  updateNormal();

  // 2. Run Debounced (Waits for silence)
  debouncedUpdate();

  // 3. Run Throttled (Runs steadily)
  throttledUpdate();
});
