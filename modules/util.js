// utils.js

console.log("Hello from utils.js! This file is loading.");

// A named export.
// 'export' keyword makes it available to other files.
export function greetUser(name) {
  return `Hello, ${name}! Welcome to our module app.`;
}

// Another named export.
export function add(a, b) {
  return a + b;
}

// A default export.
// A file can only have ONE default export.
// It's for the "main" thing the file provides.
const appName = "My Awesome App";
export default appName;
