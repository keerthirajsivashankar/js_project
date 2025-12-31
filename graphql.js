// Hey man! This is the magic behind "styled-components" and "graphql".
// We are going to build a security tool that prevents hackers from injecting code.

console.log("===============================");
console.log("--- 1. THE WEIRD SYNTAX ---");
console.log("===============================");

const user = "Alex";
const age = 30;

// Normal Template Literal:
const normal = `User ${user} is ${age}`;
console.log("Normal:", normal); // "User Alex is 30"

// Tagged Template Literal:
// We put a function name BEFORE the backticks.
function myTag(strings, ...values) {
  console.log("1. Strings Array:", strings);
  // ["User ", " is ", ""] (The static text parts)

  console.log("2. Values Array:", values);
  // ["Alex", 30] (The variables inside ${})

  return "I intercepted this string!";
}

const tagged = myTag`User ${user} is ${age}`;
console.log("Result:", tagged);

console.log("\n===============================");
console.log("--- 2. REAL WORLD: HTML SANITIZER ---");
console.log("===============================");
// Problem: If you put user input directly into HTML, they can inject <script> tags (XSS Attack).
// Solution: A Tagged Template that automatically "escapes" dangerous characters.

function safeHTML(strings, ...values) {
  // 1. We start with the first string part
  let finalString = strings[0];

  // 2. Loop through each variable (value)
  for (let i = 0; i < values.length; i++) {
    const unsafeValue = String(values[i]);

    // 3. SANITIZE: Replace < and > with safe text
    const safeValue = unsafeValue
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // 4. Stitch it back together
    // Add the safe variable, then the next chunk of static text
    finalString += safeValue + strings[i + 1];
  }

  return finalString;
}

// SCENARIO: A hacker tries to inject a script
const hackerInput = "<img src=x onerror=alert('HACKED')>";
const username = "Guest";

// UNSAFE WAY:
const unsafe = `<div>Welcome ${username}, you said: ${hackerInput}</div>`;
console.log("❌ Unsafe HTML:\n", unsafe);
// Browser would run that 'onerror' script!

// SAFE WAY (Using our Tag):
// Notice we use safeHTML`...`
const safe = safeHTML`<div>Welcome ${username}, you said: ${hackerInput}</div>`;

console.log("\n✅ Safe HTML:\n", safe);
// Output: ... you said: &lt;img src=x onerror=alert('HACKED')&gt; ...
// The browser treats it as text, not code. Safe!

console.log("\n===============================");
console.log("--- 3. MINI STYLED-COMPONENTS ---");
console.log("===============================");
// This is how styled-components works under the hood.

function css(strings, ...values) {
  // Simple version: just join them back together
  // Real libraries would generate a unique class name here
  const styleString = strings.reduce((acc, str, i) => {
    return acc + str + (values[i] || "");
  }, "");

  return {
    styles: styleString,
    className: "sc-" + Math.floor(Math.random() * 10000),
  };
}

const color = "blue";
const ButtonStyles = css`
  background-color: ${color};
  padding: 10px;
  border-radius: 5px;
`;

console.log("Generated Styles Object:", ButtonStyles);
