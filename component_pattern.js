// Hey man! This is the "Lego Block" logic of React.
// We are going to learn how to put components INSIDE components.

console.log("===============================");
console.log("--- 1. THE PROBLEM (Rigid Components) ---");
console.log("===============================");

// Scenario: A "Card" component.
// BAD WAY: Hardcoding what's inside via strings.

function Card_Bad(props) {
  // This card is NOT flexible. It can only show a 'title' string.
  // What if I want an Image? Or a Button? I can't.
  return `
    <div class="card">
      <div class="card-body">
        ${props.title}
      </div>
    </div>
  `;
}

console.log(Card_Bad({ title: "Just Text" }));

console.log("\n===============================");
console.log("--- 2. THE SOLUTION (The 'children' Prop) ---");
console.log("===============================");
// In React, whatever you put BETWEEN the tags <Card>...</Card>
// appears in props.children.

function Card_Good(props) {
  return {
    type: "div",
    className: "card",
    // We just render whatever was passed in 'children'.
    // The Card doesn't care if it's text, an image, or a form!
    children: props.children,
  };
}

// Usage Simulation:
// <Card_Good> <h1>Hello</h1> </Card_Good>
const usage1 = Card_Good({
  children: { type: "h1", text: "Hello World" },
});

console.log("Flexible Card 1:", JSON.stringify(usage1, null, 2));

// Usage 2: Different Content
// <Card_Good> <img src="..." /> <button>Click</button> </Card_Good>
const usage2 = Card_Good({
  children: [
    { type: "img", src: "pic.jpg" },
    { type: "button", text: "Click Me" },
  ],
});

console.log("Flexible Card 2:", JSON.stringify(usage2, null, 2));

console.log("\n===============================");
console.log("--- 3. THE SLOT PATTERN (Multiple Holes) ---");
console.log("===============================");
// Interview Q: "What if I need a Layout with a Sidebar AND a Main Content area?"
// Answer: You can pass Components as REGULAR PROPS. This is the "Slot" pattern.

/*
  <Layout
    left={ <Sidebar /> }
    right={ <Feed /> }
  />
*/

function SplitLayout(props) {
  return {
    type: "div",
    className: "split-screen",
    children: [
      { type: "aside", className: "left-pane", children: props.left },
      { type: "main", className: "right-pane", children: props.right },
    ],
  };
}

// Define the pieces
const Sidebar = { type: "nav", text: "Menu Links..." };
const Feed = { type: "div", text: "User Posts..." };

// Assemble them!
const page = SplitLayout({
  left: Sidebar,
  right: Feed,
});

console.log("Split Layout Structure:", JSON.stringify(page, null, 2));

console.log("\n===============================");
console.log("--- 4. SPECIALIZATION (Composition) ---");
console.log("===============================");
// Instead of Inheritance (class SuccessButton extends Button),
// we use Composition (SuccessButton USES Button).

function GenericButton({ color, children }) {
  return { type: "button", style: `bg-${color}`, content: children };
}

// A Specialized Component
function DeleteButton() {
  // We configure the generic one to make a specific one.
  return GenericButton({
    color: "red",
    children: "🗑️ Delete Item",
  });
}

function SaveButton() {
  return GenericButton({
    color: "green",
    children: "💾 Save Progress",
  });
}

console.log("Delete Btn:", DeleteButton());
console.log("Save Btn:", SaveButton());
