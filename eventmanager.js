// Hey man! This is the "Observer Pattern".
// We are going to build our own version of 'addEventListener'.

console.log("===============================");
console.log("--- 1. BUILDING THE EVENT MANAGER ---");
console.log("===============================");

class EventManager {
  constructor() {
    // This object holds our lists of subscribers.
    // Format: { "video-uploaded": [func1, func2], "login": [func3] }
    this.listeners = {};
  }

  // 1. SUBSCRIBE (addEventListener)
  subscribe(event, callback) {
    if (!this.listeners[event]) {
      // If this event doesn't exist yet, create a new array for it
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
    console.log(`✅ Subscribed to '${event}'`);
  }

  // 2. UNSUBSCRIBE (removeEventListener)
  // Essential for preventing memory leaks!
  unsubscribe(event, callback) {
    if (!this.listeners[event]) return;

    // Filter out the specific callback function
    this.listeners[event] = this.listeners[event].filter(
      (fn) => fn !== callback
    );
    console.log(`❌ Unsubscribed from '${event}'`);
  }

  // 3. NOTIFY (dispatchEvent / emit)
  notify(event, data) {
    console.log(`\n📢 Broadcasting '${event}' with data:`, data);

    if (!this.listeners[event]) return;

    // Loop through the array and run every function!
    this.listeners[event].forEach((callback) => {
      callback(data);
    });
  }
}

// Let's test it out!
const youtube = new EventManager();

console.log("\n===============================");
console.log("--- 2. REAL WORLD SCENARIO: YOUTUBE ---");
console.log("===============================");

// User 1 logic
const alex = (data) => {
  console.log(`[Alex's Phone] Notification: New video "${data.title}"`);
};

// User 2 logic
const sam = (data) => {
  console.log(
    `[Sam's Laptop] Email: Check out "${data.title}" by ${data.channel}`
  );
};

// 1. Users Subscribe
youtube.subscribe("upload", alex);
youtube.subscribe("upload", sam);

// 2. Channel Uploads (Notify)
youtube.notify("upload", {
  title: "JS Design Patterns",
  channel: "Placement Buddy",
});

// 3. One User Unsubscribes
console.log("\n(Sam gets bored and unsubscribes...)");
youtube.unsubscribe("upload", sam);

// 4. Channel Uploads Again
youtube.notify("upload", {
  title: "Advanced React",
  channel: "Placement Buddy",
});

// Notice: Sam didn't get the second notification!

console.log("\n===============================");
console.log("--- 3. WHY IS THIS POWERFUL? ---");
console.log("===============================");
// DECOUPLING.
// The 'youtube' object DOES NOT know who 'alex' or 'sam' are.
// It just loops through a list.
// This means you can add 1000 new users without changing the 'youtube' code.
