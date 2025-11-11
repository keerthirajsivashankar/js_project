// main.js

// 1. Import from our module.
// We MUST use './' to tell JS it's a local file.

// Import the default export. We can give it any name.
import siteTitle from "./util.js";

// Import the named exports. The names MUST match.
import { greetUser, add } from "./util.js";

console.log("Hello from main.js! The app is starting.");

// 2. Now, use the imported code!
const titleElement = document.getElementById("title");
const greetingElement = document.getElementById("greeting");
const sumElement = document.getElementById("sum");

// Use the default export
titleElement.textContent = siteTitle;

// Use a named export
greetingElement.textContent = greetUser("Alex"); // 'Alex' is your buddy's name

// Use another named export
sumElement.textContent = `10 + 20 = ${add(10, 20)}`;
