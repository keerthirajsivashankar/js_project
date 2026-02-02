// Hey man! This is "State Management" de-mystified.
// We are going to build the core engine of Redux from scratch.

console.log("===============================");
console.log("--- 1. THE REDUCER (The Logic) ---");
console.log("===============================");
// Rule 1: State is Read-Only.
// Rule 2: To change state, you dispatch an "Action".
// Rule 3: A "Reducer" function calculates the new state.

// Initial State (The Database)
const initialState = {
  count: 0,
  user: null,
};

// The Reducer Function
// (state, action) => newState
function appReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "LOGIN":
      return { ...state, user: action.payload }; // payload contains data

    case "LOGOUT":
      return { ...state, user: null };

    default:
      return state;
  }
}

console.log("Reducer defined. It sits waiting for actions.");

console.log("\n===============================");
console.log("--- 2. THE STORE (The Engine) ---");
console.log("===============================");
// The Store holds the state and lets components "Subscribe" to changes.

function createStore(reducer) {
  let state; // The hidden state (Closure!)
  let listeners = []; // List of components waiting for updates

  // 1. Get State
  const getState = () => state;

  // 2. Dispatch (Send a command)
  const dispatch = (action) => {
    console.log(`\n📢 DISPATCH: ${action.type}`);
    // Calculate new state using the reducer
    state = reducer(state, action);

    // Notify all listeners (re-render components)
    listeners.forEach((listener) => listener());
  };

  // 3. Subscribe (Listen for changes)
  const subscribe = (listener) => {
    listeners.push(listener);
    // Return a cleanup function (unsubscribe)
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  // Initialize state
  dispatch({ type: "@@INIT" });

  return { getState, dispatch, subscribe };
}

// Create our specific store
const store = createStore(appReducer);

console.log("\n===============================");
console.log("--- 3. SIMULATING THE APP ---");
console.log("===============================");

// COMPONENT A (e.g., A Counter Display)
store.subscribe(() => {
  const current = store.getState();
  console.log(`[Component A] UI Updated: Count is ${current.count}`);
});

// COMPONENT B (e.g., A User Profile Header)
store.subscribe(() => {
  const current = store.getState();
  if (current.user) {
    console.log(`[Component B] Header: Welcome, ${current.user}`);
  } else {
    console.log(`[Component B] Header: Please Login`);
  }
});

// --- ACTION TIME ---

// 1. User Clicks "Add"
store.dispatch({ type: "INCREMENT" });
// Both components log update

// 2. User Clicks "Add" again
store.dispatch({ type: "INCREMENT" });

// 3. User Logs in
store.dispatch({ type: "LOGIN", payload: "Alex" });

// 4. User Logs out
store.dispatch({ type: "LOGOUT" });
