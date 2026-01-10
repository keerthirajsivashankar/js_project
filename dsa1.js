// Hey man! This is the "Speed King" of Data Structures.
// We are building a Binary Search Tree (BST).

console.log("===============================");
console.log("--- 1. BUILDING THE BST ---");
console.log("===============================");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // INSERT: The logic is "Go Left if smaller, Go Right if bigger"
  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      // 1. Check Duplicates (Optional, usually we ignore or count them)
      if (val === current.val) return undefined;

      // 2. Go Left
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      // 3. Go Right
      else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // SEARCH: Finding a value is super fast (O(log n))
  contains(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true; // Found it!
      }
    }
    return false;
  }
}

// LET'S BUILD THIS TREE:
//       10
//      /  \
//     5    13
//    / \  /  \
//   2  7 11  16

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log("Does tree contain 11?", tree.contains(11)); // true
console.log("Does tree contain 99?", tree.contains(99)); // false

console.log("\n===============================");
console.log("--- 2. BFS (Breadth-First Search) ---");
console.log("===============================");
// Interview Question: "Print the tree Level-by-Level."
// Result should be: [10, 5, 13, 2, 7, 11, 16]
// TRICK: Use a QUEUE (First-In, First-Out).

function BFS(tree) {
  let node = tree.root;
  let data = [];
  let queue = []; // Our "To-Do" list

  queue.push(node);

  while (queue.length) {
    // 1. Take from the front of the line
    node = queue.shift();

    // 2. Save the value
    data.push(node.val);

    // 3. Add children to the back of the line
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return data;
}

console.log("BFS (Level Order):", BFS(tree));

console.log("\n===============================");
console.log("--- 3. DFS (Depth-First Search) ---");
console.log("===============================");
// Interview Question: "Explore deep into a branch before moving to the next."
// Result (PreOrder): [10, 5, 2, 7, 13, 11, 16] (Root -> Left -> Right)
// TRICK: Use RECURSION.

function DFSPreOrder(tree) {
  let data = [];

  function traverse(node) {
    // 1. Capture the "Root" (Current)
    data.push(node.val);

    // 2. Go Deep Left
    if (node.left) traverse(node.left);

    // 3. Go Deep Right
    if (node.right) traverse(node.right);
  }

  traverse(tree.root);
  return data;
}

console.log("DFS (PreOrder):", DFSPreOrder(tree));

// BONUS: DFS InOrder (Used to get sorted data from BST!)
// Left -> Root -> Right
function DFSInOrder(tree) {
  let data = [];
  function traverse(node) {
    if (node.left) traverse(node.left);
    data.push(node.val); // Capture Middle
    if (node.right) traverse(node.right);
  }
  traverse(tree.root);
  return data;
}

console.log("DFS (InOrder - Sorted!):", DFSInOrder(tree));
// [2, 5, 7, 10, 11, 13, 16] -> Look! It sorted our numbers.
