// Hey man! This is how Senior Devs write clean React code.
// We separate LOGIC from UI.

console.log("===============================");
console.log("--- 1. THE PROBLEM (Duplication) ---");
console.log("===============================");

// Scenario: We have a Modal and a Menu. Both toggle Open/Closed.

function Modal_Bad() {
  const [isOpen, setIsOpen] = ["false", "fn"]; // Simulated useState
  const toggle = () => setIsOpen(!isOpen);

  console.log("Modal Logic: Defined isOpen, defined toggle...");
  return "<div>Modal UI</div>";
}

function Menu_Bad() {
  const [isOpen, setIsOpen] = ["false", "fn"]; // Duplicated!
  const toggle = () => setIsOpen(!isOpen); // Duplicated!

  console.log("Menu Logic: Defined isOpen, defined toggle...");
  return "<div>Menu UI</div>";
}

console.log("(See how we repeated the logic twice?)");

console.log("\n===============================");
console.log("--- 2. THE SOLUTION (Custom Hooks) ---");
console.log("===============================");

// We extract the logic into a function starting with "use"
function useToggle(initialValue = false) {
  // In real React: const [state, setState] = useState(initialValue);
  let state = initialValue;

  const toggle = () => {
    state = !state;
    console.log(`🔀 Toggling state to: ${state}`);
  };

  const setOn = () => {
    state = true;
  };
  const setOff = () => {
    state = false;
  };

  // We return exactly what the component needs
  return { isVisible: state, toggle, setOn, setOff };
}

// NOW look how clean the components are:

function Modal_Good() {
  // One line of logic!
  const modalState = useToggle(false);

  // We can rename destructuring if we want:
  // const { isVisible: isModalOpen, toggle } = useToggle();

  return `
    <Modal open="${modalState.isVisible}">
      <button onClick="${modalState.toggle}">Close</button>
    </Modal>
  `;
}

function Menu_Good() {
  // Reusing the same logic function
  const menuState = useToggle(true); // Default open

  return `
    <Menu open="${menuState.isVisible}">
      <button onClick="${menuState.setOff}">Close Menu</button>
    </Menu>
  `;
}

console.log("1. Modal Component:", Modal_Good());
console.log("2. Menu Component:", Menu_Good());

console.log("\n===============================");
console.log("--- 3. REAL WORLD: useFetch ---");
console.log("===============================");
// This is the most common Custom Hook in interviews.
// It handles Loading, Error, and Data states automatically.

// The Hook
function useFetch(url) {
  // Simulated State hooks
  let data = null;
  let loading = true;
  let error = null;

  console.log(`Hook: Starting fetch for ${url}...`);

  // Simulated Effect logic
  try {
    // Fake API call
    if (url === "bad_url") throw new Error("404 Not Found");

    data = { id: 1, title: "Fetched Data" };
    loading = false;
  } catch (err) {
    error = err.message;
    loading = false;
  }

  return { data, loading, error };
}

// The Component
function UserProfile() {
  // One line to handle ALL async states!
  const { data, loading, error } = useFetch("https://api.user/1");

  if (loading) return "<Spinner />";
  if (error) return `<Error msg="${error}" />`;

  return `<h1>${data.title}</h1>`;
}

console.log("\n--- Render UserProfile ---");
console.log(UserProfile());

console.log("\n--- Render Broken Component ---");
function BrokenComp() {
  const { error } = useFetch("bad_url");
  return error ? `<div>Error: ${error}</div>` : "<div>Success</div>";
}
console.log(BrokenComp());
