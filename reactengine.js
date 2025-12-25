// Hey man! This is the "Secret Sauce" of React.
// We are going to build our own 'useState' to see how it works.

console.log("===============================");
console.log("--- 1. BUILDING THE REACT ENGINE ---");
console.log("===============================");

const MyReact = (function () {
  // THIS IS THE "BACKPACK" (Closure)
  // React keeps your state arrays hidden here.
  let hooks = [];
  let currentHookIndex = 0; // Tracks which hook we are using

  return {
    // A. The 'render' function simulates React updating the screen
    render(Component) {
      // Reset index before every render so we start from the top
      currentHookIndex = 0;

      const Comp = Component(); // Run the component function
      Comp.render(); // Simulate displaying the UI
      return Comp;
    },

    // B. Our custom 'useState' hook
    useState(initialValue) {
      // Freeze the index for this specific hook call
      const _idx = currentHookIndex;

      // If state doesn't exist yet, initialize it
      const state = hooks[_idx] || initialValue;

      // Create the 'setState' function
      const setState = (newValue) => {
        hooks[_idx] = newValue; // Update the hidden array
        // In real React, this triggers a re-render automatically.
        console.log(`\n🔴 State Changed! Setting value to: ${newValue}`);
      };

      // Move to the next hook for the next line of code
      currentHookIndex++;

      return [state, setState];
    },

    // C. Reset for the demo (not in real React)
    resetHooks() {
      hooks = [];
      currentHookIndex = 0;
    },
  };
})();

console.log("\n===============================");
console.log("--- 2. CREATING A COMPONENT ---");
console.log("===============================");

// This looks just like a real React Component!
function Counter() {
  // Hook 1: The Count
  const [count, setCount] = MyReact.useState(0);

  // Hook 2: The Text
  const [text, setText] = MyReact.useState("Apple");

  return {
    click: () => setCount(count + 1),
    type: (txt) => setText(txt),
    render: () =>
      console.log(`🖼️ UI RENDERED: Count is ${count}, Text is "${text}"`),
  };
}

console.log("\n===============================");
console.log("--- 3. THE RENDER CYCLE (The Magic) ---");
console.log("===============================");

// 1. FIRST RENDER (Mount)
console.log("--- MOUNT ---");
let App = MyReact.render(Counter);
// Output: Count is 0, Text is "Apple"

// 2. INTERACTION (Click)
// We call the setter, which updates the hidden 'hooks' array.
App.click();
// Then React re-runs the component...
console.log("--- RE-RENDER 1 ---");
App = MyReact.render(Counter);
// Output: Count is 1, Text is "Apple" (It remembered!)

// 3. INTERACTION (Type)
App.type("Banana");
console.log("--- RE-RENDER 2 ---");
App = MyReact.render(Counter);
// Output: Count is 1, Text is "Banana"

console.log("\n===============================");
console.log("--- 4. THE RULES OF HOOKS ---");
console.log("===============================");
// Interviewer: "Why can't I put a Hook inside an 'if' statement?"

/*
  Imagine if we did this inside Counter:
  
  if (Math.random() > 0.5) {
     const [extra, setExtra] = useState("Hidden");
  }

  The 'hooks' array relies entirely on INDEX (0, 1, 2).
  If you skip a hook because of an 'if' statement, 
  Hook #2 will try to grab the data from Hook #1's slot.
  The whole system breaks.
*/

console.log("Because 'hooks' are stored in a simple array (index 0, 1, 2...),");
console.log("the order MUST stay exactly the same on every render.");
console.log("This is why Hooks must be at the top level!");
