// Hey man! This is the "Brain" of React.
// We are going to write the algorithm that decides WHAT to update.

console.log("===============================");
console.log("--- 1. THE VIRTUAL DOM TREES ---");
console.log("===============================");

// 1. The Old Tree (Snapshot A)
const oldVDom = {
  type: "div",
  props: { id: "container" },
  children: [
    { type: "h1", props: {}, children: ["Hello World"] },
    { type: "input", props: { placeholder: "Type here" }, children: [] },
  ],
};

// 2. The New Tree (Snapshot B)
// Changes: h1 text changed, input placeholder changed
const newVDom = {
  type: "div",
  props: { id: "container" },
  children: [
    { type: "h1", props: {}, children: ["Hello React"] }, // Changed Text
    { type: "input", props: { placeholder: "Search..." }, children: [] }, // Changed Prop
  ],
};

console.log("Old Tree:", oldVDom);
console.log("New Tree:", newVDom);

console.log("\n===============================");
console.log("--- 2. THE DIFFING ALGORITHM ---");
console.log("===============================");

// This function compares two nodes and returns instructions ("Patches").
function diff(oldNode, newNode) {
  // CASE 1: Node removed
  if (oldNode && !newNode) {
    return "❌ REMOVE_NODE";
  }

  // CASE 2: Node added
  if (!oldNode && newNode) {
    return `✨ ADD_NODE: <${newNode.type}>`;
  }

  // CASE 3: Different Types (e.g., div -> span)
  // React strategy: Tear it down and rebuild!
  if (oldNode.type !== newNode.type) {
    return `🔄 REPLACE_NODE: <${oldNode.type}> -> <${newNode.type}>`;
  }

  // CASE 4: Same Type? Check Props & Children (Reconciliation)
  // If we are here, the node type is the same. We just need to patch details.

  // A. Check Text Content (Simplified for this demo)
  if (
    typeof oldNode.children[0] === "string" &&
    typeof newNode.children[0] === "string"
  ) {
    if (oldNode.children[0] !== newNode.children[0]) {
      console.log(
        `📝 UPDATE TEXT: "${oldNode.children[0]}" -> "${newNode.children[0]}"`,
      );
    }
  }

  // B. Check Props (Attributes)
  const allKeys = new Set([
    ...Object.keys(oldNode.props),
    ...Object.keys(newNode.props),
  ]);
  for (const key of allKeys) {
    if (oldNode.props[key] !== newNode.props[key]) {
      console.log(
        `⚙️ UPDATE PROP: ${key}="${oldNode.props[key]}" -> "${newNode.props[key]}"`,
      );
    }
  }

  // C. Recursion: Diff the Children
  // This is where "Keys" matter in real React. Here we assume index matching.
  const maxLen = Math.max(oldNode.children.length, newNode.children.length);

  for (let i = 0; i < maxLen; i++) {
    // Recursive call for each child
    const patch = diff(oldNode.children[i], newNode.children[i]);
    if (patch) console.log(`   👉 Child [${i}]: ${patch}`);
  }
}

console.log("\n===============================");
console.log("--- 3. RUNNING THE DIFF ---");
console.log("===============================");

console.log("Comparing Trees...");
diff(oldVDom, newVDom);

/* EXPECTED OUTPUT:
   📝 UPDATE TEXT: "Hello World" -> "Hello React"
   ⚙️ UPDATE PROP: placeholder="Type here" -> "Search..."
*/

console.log("\n===============================");
console.log("--- 4. SCENARIO: TEAR DOWN ---");
console.log("===============================");

const treeA = { type: "div", props: {}, children: [] };
const treeB = { type: "span", props: {}, children: [] };

console.log("Diffing <div> vs <span>:");
const result = diff(treeA, treeB);
console.log(result);
// Output: REPLACE_NODE.
// React assumes if the type changes, the whole sub-tree is likely different.
