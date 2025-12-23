// Hey man! This is your "Pre-Flight Check" for JSX.
// JSX looks like HTML, but it behaves like JavaScript.

console.log("===============================");
console.log("--- 1. THE RESERVED WORDS (Class vs ClassName) ---");
console.log("===============================");

// HTML: <div class="container"></div>
// JS Error: 'class' is a reserved keyword for creating Classes!

const badReact = {
  // class: "container" // ❌ ERROR!
};

const goodReact = {
  className: "container", // ✅ Correct!
  htmlFor: "inputId", // ✅ 'for' is also reserved (loops), use 'htmlFor'
};

console.log("Use 'className' instead of 'class':", goodReact);

console.log("\n===============================");
console.log("--- 2. INLINE STYLES ARE OBJECTS ---");
console.log("===============================");

// HTML: <div style="color: red; background-color: blue;">
// JS Error: You can't pass a string string like that.

// REACT: Styles are passed as an OBJECT.
// CSS properties with dashes become camelCase.

const styles = {
  color: "red",
  backgroundColor: "blue", // ✅ background-color becomes backgroundColor
  fontSize: "20px", // ✅ font-size becomes fontSize
};

// <div style={styles}>
console.log("React Styles Object:", styles);

console.log("\n===============================");
console.log("--- 3. THE SINGLE PARENT RULE ---");
console.log("===============================");
// HTML: You can return siblings.
// <h1>Hi</h1><p>Text</p>

// JS: A function cannot return TWO values at once!
// function Comp() { return 1, 2; } // ❌ Impossible

// REACT: You must wrap everything in ONE parent tag.
// If you don't want an extra <div>, use a "Fragment" <></>

const validJSX = {
  type: "Fragment", // <></>
  children: [
    { type: "h1", text: "Hi" },
    { type: "p", text: "Text" },
  ],
};
console.log("Must return ONE parent (or Fragment).");

console.log("\n===============================");
console.log("--- 4. INTERPOLATION (The Curly Braces {}) ---");
console.log("===============================");
// In HTML, everything is text.
// In React, {} is a portal to "JavaScript Land".

const user = "Alex";
const element = `<h1>Hello, ${user}</h1>`; // In JS we use ${} inside backticks

// In React JSX:
// <h1>Hello, {user}</h1>
// Inside {}, you can write ANY valid JS expression.

const reactLogic = {
  text: "Hello",
  variable: user,
  math: 10 + 20,
  ternary: true ? "Yes" : "No",
};
console.log("Inside {}, you can write JS:", reactLogic);

console.log("\n===============================");
console.log("--- 5. LISTS NEED KEYS ---");
console.log("===============================");
// When you map over an array to create elements, React needs to know
// which one is which if you delete or re-order them.

const ids = [101, 102, 103];

// ❌ BAD:
const badList = ids.map((id) => `<div>${id}</div>`);

// ✅ GOOD:
// <div key={id}>{id}</div>
// The 'key' must be unique and stable (like an ID, not the index).

console.log("Always add a unique 'key' prop when using .map()!");
