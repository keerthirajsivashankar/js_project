// Hey man! This is the "Secret Pocket" of React components.
// We are going to learn about useRef.

console.log("===============================");
console.log("--- 1. THE PROBLEM (Variables reset) ---");
console.log("===============================");

// Scenario: We want to count how many times a component rendered.

function BadComponent() {
  let renderCount = 0; // ❌ This resets to 0 every time the function runs!
  renderCount++;
  console.log(`Render count: ${renderCount}`);
}

BadComponent(); // 1
BadComponent(); // 1 (It forgot!)

console.log("\n===============================");
console.log("--- 2. THE PROBLEM WITH STATE (Infinite Loops) ---");
console.log("===============================");

// "Okay, I'll use useState instead!"
// ❌ BAD: Setting state triggers a re-render... which runs the code...
// which sets state... which triggers re-render...

// function InfiniteLoopComponent() {
//   const [count, setCount] = useState(0);
//   setCount(count + 1); // 🔥 CRASH
// }

console.log("\n===============================");
console.log("--- 3. THE SOLUTION (useRef) ---");
console.log("===============================");
// useRef gives you an object { current: initialValue }
// 1. It PERSISTS between renders (like state).
// 2. It DOES NOT trigger a re-render when changed.

const MyReact = (function () {
  let hooks = [];
  let idx = 0;

  return {
    render(Component) {
      idx = 0;
      const C = Component();
      C.render();
      return C;
    },

    useState(initVal) {
      const state = hooks[idx] || initVal;
      const _idx = idx;
      const setState = (newVal) => {
        hooks[_idx] = newVal;
        // In real React, this triggers a re-render
        console.log(`\n♻️ Re-rendering due to State Change...`);
      };
      idx++;
      return [state, setState];
    },

    // SIMULATED useRef
    useRef(initVal) {
      // If we haven't created the ref object yet, create it.
      // Notice we store the WHOLE OBJECT inside the hook slot.
      if (!hooks[idx]) {
        hooks[idx] = { current: initVal };
      }

      const ref = hooks[idx];
      idx++;
      return ref;
    },
  };
})();

function Stopwatch() {
  // We use State for what the user SEES (Time)
  const [seconds, setSeconds] = MyReact.useState(0);

  // We use Ref for what the logic NEEDS (The Timer ID)
  // Changing this ID shouldn't re-paint the screen.
  const timerId = MyReact.useRef(null);

  // We use Ref to track renders without causing loops
  const renders = MyReact.useRef(1);

  // Simulate an Effect starting the timer
  const start = () => {
    if (timerId.current) return; // Already running

    console.log("▶️ Starting Timer...");
    timerId.current = setInterval(() => {
      // Imagine this calls setSeconds(s => s + 1)
      console.log("   Tick...");
    }, 1000);
  };

  const stop = () => {
    console.log("⏹️ Stopping Timer ID:", timerId.current);
    clearInterval(timerId.current);
    timerId.current = null;
  };

  return {
    render: () => {
      console.log(`UI: ${seconds}s | Render Count: ${renders.current}`);
      renders.current++; // Mutating ref doesn't re-render!
    },
    start,
    stop,
  };
}

// 1. Mount
console.log("--- MOUNT ---");
let App = MyReact.render(Stopwatch);
// Output: UI: 0s | Render Count: 1

// 2. Start Logic
App.start();
// The timer ID is saved in 'timerId.current'. No re-render triggered yet.

// 3. User Clicks Stop
App.stop();
// We access the saved ID from 'timerId.current' to clear it.

// 4. Force a Re-render (simulating state update)
console.log("\n--- RE-RENDER ---");
App = MyReact.render(Stopwatch);
// Output: UI: 0s | Render Count: 2 (It remembered the count!)

console.log("\n===============================");
console.log("--- 4. REAL WORLD: DOM ACCESS ---");
console.log("===============================");
// Interview Q: "How do I focus an input automatically?"

/*
  In React:
  const inputRef = useRef(null);
  
  useEffect(() => {
    // React sets .current to the real DOM node after render
    inputRef.current.focus(); 
  }, []);

  return <input ref={inputRef} />;
*/

console.log("useRef is the bridge between React (Virtual) and DOM (Real).");
