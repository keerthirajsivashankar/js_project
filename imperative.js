// Hey man! This is "React" without installing React.
// It proves that React is just JavaScript logic patterns.

console.log("===============================");
console.log("--- 1. IMPERATIVE vs. DECLARATIVE ---");
console.log("===============================");

// ❌ IMPERATIVE (Vanilla JS Way)
// You micromanage the DOM. "Find div, add class, remove text..."
// Hard to manage as apps get big.
function imperativeWay(user) {
  console.log("--- Imperative ---");
  let html = "<div>";
  if (user.isLoggedIn) {
    html += "<h1>Welcome " + user.name + "</h1>";
  } else {
    html += "<button>Login</button>";
  }
  html += "</div>";
  console.log(html);
}

// ✅ DECLARATIVE (React Way)
// You just describe the FINAL STATE based on data.
// UI = f(State)
function declarativeWay(user) {
  console.log("--- Declarative ---");
  return {
    type: "div",
    children: user.isLoggedIn
      ? { type: "h1", text: `Welcome ${user.name}` }
      : { type: "button", text: "Login" },
  };
}

const user = { isLoggedIn: true, name: "Alex" };
imperativeWay(user);
console.log(declarativeWay(user));
// Notice: React just returns an OBJECT description. It doesn't touch the DOM yet.

console.log("\n===============================");
console.log("--- 2. COMPONENTS & PROPS ---");
console.log("===============================");

// In React, a "Component" is just a Function.
// "Props" are just the Argument Object.

// <Button color="red" text="Click Me" />
// Becomes: Button({ color: "red", text: "Click Me" })

function Button(props) {
  // Destructuring Props (Modern React Standard)
  const { color, text } = props;

  return {
    type: "button",
    styles: `background-color: ${color}`,
    text: text,
  };
}

// <Navbar />
function Navbar(props) {
  return {
    type: "nav",
    children: [
      // Composing Components (Function calling Function)
      Button({ color: "blue", text: "Home" }),
      Button({ color: "red", text: "Logout" }),
    ],
  };
}

console.log("Rendered Navbar:", JSON.stringify(Navbar(), null, 2));

console.log("\n===============================");
console.log("--- 3. THE VIRTUAL DOM (Under the Hood) ---");
console.log("===============================");

// When you write JSX: <div id="app">Hello</div>
// React compiles it into a pure JS Object like this:

const virtualDOM = {
  type: "div",
  props: { id: "app" },
  children: ["Hello"],
};

// React compares this Object to the previous Object.
// If they are different, it updates the REAL DOM.
// This is "Reconciliation".

function render(vDom) {
  console.log(
    `🎨 Painting to screen: <${vDom.type}> ${vDom.children || vDom.text} </${vDom.type}>`,
  );
}

render(virtualDOM);

console.log("\n===============================");
console.log("--- 4. STATE & RE-RENDERING ---");
console.log("===============================");

// React Logic: When State changes, run the function again.

let appState = { count: 0 };

function App(state) {
  return {
    type: "h1",
    text: `Count is: ${state.count}`,
  };
}

// Initial Render
console.log("1. Initial:", App(appState));

// Interaction happens...
appState.count = 1;

// Re-Render (React calls the function again)
console.log("2. Update:", App(appState));

// This is why we use 'const' in React components.
// Every render is a FRESH function call with FRESH variables.
