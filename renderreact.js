// Hey man! This is the logic behind "useEffect".
// It explains Mount, Update, and Unmount.

console.log("===============================");
console.log("--- 1. THE PROBLEM (Infinite Loops) ---");
console.log("===============================");

let renderCount = 0;

function BadComponent() {
  renderCount++;
  console.log(`Rendering... (Count: ${renderCount})`);

  // ❌ BAD: Side Effect directly in body
  // If this triggered a state update (like setting data),
  // it would trigger a re-render... which runs this again... forever.
  console.log("🔥 API Call sent!");

  if (renderCount > 3) {
    console.log("🛑 CRASH! Infinite Loop detected. Stopping.");
    return;
  }

  // Simulate re-render
  // BadComponent();
}

BadComponent();

console.log("\n===============================");
console.log("--- 2. THE LIFECYCLE (Birth, Life, Death) ---");
console.log("===============================");

/*
  React components have 3 phases:
  1. MOUNT (Birth): Added to the screen for the first time.
  2. UPDATE (Life): Props or State changed.
  3. UNMOUNT (Death): Removed from the screen.
*/

const MyReact = (function () {
  let hooks = [];
  let idx = 0;

  return {
    render(Component) {
      idx = 0; // Reset hook index
      const C = Component();
      C.render();
      return C;
    },

    useState(initVal) {
      const state = hooks[idx] || initVal;
      const _idx = idx;
      const setState = (newVal) => {
        hooks[_idx] = newVal;
      };
      idx++;
      return [state, setState];
    },

    // SIMULATED useEffect
    // deps = Dependency Array
    useEffect(callback, deps) {
      const oldDeps = hooks[idx];
      let hasChanged = true;

      // Check if dependencies changed since last render
      if (oldDeps) {
        // Compare every item in the dependency array
        hasChanged = deps.some((dep, i) => !Object.is(dep, oldDeps[i]));
      }

      if (hasChanged) {
        console.log("✨ EFFECT RUNNING (Dependencies changed)");
        callback(); // Run the side effect!
        hooks[idx] = deps; // Save new deps
      } else {
        console.log("💤 Effect Skipped (Nothing changed)");
      }

      idx++;
    },
  };
})();

console.log("\n===============================");
console.log("--- 3. SIMULATING useEffect ---");
console.log("===============================");

function UserProfile() {
  const [userId, setUserId] = MyReact.useState(1);

  // Effect 1: Run ONLY on Mount (Empty Array [])
  MyReact.useEffect(() => {
    console.log("🚀 [Mount] Component appeared on screen!");
  }, []);

  // Effect 2: Run when 'userId' changes
  MyReact.useEffect(() => {
    console.log(`🔄 [Update] Fetching data for User ID: ${userId}...`);
  }, [userId]);

  return {
    render: () => console.log("🎨 UI Painted"),
    nextUser: () => setUserId(userId + 1),
  };
}

// 1. FIRST RENDER (Mount)
console.log("--- RENDER 1 ---");
let App = MyReact.render(UserProfile);
// Logs:
// ✨ EFFECT RUNNING (Mount)
// ✨ EFFECT RUNNING (Fetch User 1)

// 2. RE-RENDER (No changes)
console.log("\n--- RENDER 2 (Force Update, No Change) ---");
App = MyReact.render(UserProfile);
// Logs:
// 💤 Effect Skipped (Mount effect never runs again)
// 💤 Effect Skipped (UserId didn't change)

// 3. RE-RENDER (State Change)
console.log("\n--- RENDER 3 (User Clicked Next) ---");
App.nextUser(); // Change state 1 -> 2
App = MyReact.render(UserProfile);
// Logs:
// 💤 Effect Skipped (Mount effect)
// ✨ EFFECT RUNNING (Fetch User 2) -> Because [1] changed to [2]
