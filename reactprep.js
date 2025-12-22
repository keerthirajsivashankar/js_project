// Hey man! This is the bridge between JS and React.
// React relies heavily on these specific patterns.

console.log("===============================");
console.log("--- 1. PURE FUNCTIONS ---");
console.log("===============================");
// React components are supposed to be "Pure".
// Rule: Same Input -> Same Output. No Side Effects.

// IMPURE (Bad for React)
let taxRate = 0.2;
function calculateTaxImpure(amount) {
  // It relies on an outside variable that might change!
  return amount * taxRate;
}

// PURE (Good for React)
function calculateTaxPure(amount, rate) {
  // It only relies on its arguments.
  // 100, 0.2 will ALWAYS return 20.
  return amount * rate;
}

console.log("\n===============================");
console.log("--- 2. IMMUTABLE ARRAYS (State Updates) ---");
console.log("===============================");
// In React, you use 'useState'. You can't use .push()!

const todos = ["Learn JS", "Learn React", "Get Hired"];

// A. ADDING (Don't use .push)
// Bad: todos.push("New Task") -> Mutates original
// Good: Spread Operator
const newTodos = [...todos, "New Task"];
console.log("1. Added:", newTodos);

// B. DELETING (Don't use .splice)
// Good: Filter
// "Keep everything EXCEPT 'Learn React'"
const deletedTodos = todos.filter((t) => t !== "Learn React");
console.log("2. Deleted:", deletedTodos);

// C. UPDATING (Don't do todos[0] = "Done")
// Good: Map
// "Loop through. If it's 'Learn JS', change it. Otherwise, keep it."
const updatedTodos = todos.map((t) => {
  if (t === "Learn JS") return "Learn JavaScript (Done)";
  return t;
});
console.log("3. Updated:", updatedTodos);

console.log("\n===============================");
console.log("--- 3. IMMUTABLE OBJECTS ---");
console.log("===============================");

const user = {
  id: 1,
  name: "Alex",
  details: {
    theme: "Dark",
    notifications: true,
  },
};

// A. SIMPLE UPDATE
// Change name to "Alexander", keep everything else.
const updatedUser = { ...user, name: "Alexander" };
console.log("1. Simple Update:", updatedUser);

// B. NESTED UPDATE (The Hard Part)
// You have to spread EVERY layer you touch.
// If you just did { ...user, details: { theme: "Light" } },
// you would accidentally DELETE 'notifications'!

const nestedUpdate = {
  ...user, // Copy top layer
  details: {
    ...user.details, // Copy nested layer
    theme: "Light", // Overwrite specific field
  },
};
console.log("2. Nested Update:", nestedUpdate);

console.log("\n===============================");
console.log("--- 4. SHORT CIRCUITING (Conditional Rendering) ---");
console.log("===============================");
// React uses this logic to show/hide HTML elements.

const isLoggedIn = true;
const hasError = false;
const username = "DevGuy";

// A. The && Operator (Show if True)
// "If logged in, show the Dashboard"
// React translates this to: { isLoggedIn && <Dashboard /> }
const showDashboard = isLoggedIn && "Dashboard Component";
console.log("1. && Render:", showDashboard);

// B. The Ternary Operator (If/Else)
// "If logged in, show User, else show Login Button"
// React: { isLoggedIn ? <User /> : <LoginBtn /> }
const buttonText = isLoggedIn ? "Logout" : "Login";
console.log("2. Ternary:", buttonText);

// C. The || Operator (Default Fallback)
// "Show username, or 'Guest' if username is missing"
const displayName = username || "Guest";
console.log("3. Fallback:", displayName);
