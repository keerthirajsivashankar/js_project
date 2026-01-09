// Hey man! This is Data Structures 101.
// We are building a "Chain" of objects manually.

console.log("===============================");
console.log("--- 1. BUILDING THE LIST ---");
console.log("===============================");

// A. The Node (One link in the chain)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null; // Pointer to the next node
  }
}

// B. The List (The manager)
class LinkedList {
  constructor() {
    this.head = null; // The start
    this.tail = null; // The end
    this.length = 0;
  }

  // Method to add to the end (Push)
  push(val) {
    const newNode = new Node(val);

    // If list is empty, this is the head AND tail
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // 1. Take current tail
      // 2. Point its 'next' to the new node
      this.tail.next = newNode;
      // 3. Update the tail marker to be the new node
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Helper to visualize the list
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next; // Move to next node
    }
    console.log("List:", arr.join(" -> "));
  }
}

// TEST IT
const list = new LinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);

list.print(); // "10 -> 20 -> 30 -> 40"

console.log("\n===============================");
console.log("--- 2. THE INTERVIEW QUESTION: REVERSE ---");
console.log("===============================");
// Problem: Reverse the pointers so 10 -> 20 -> 30 becomes 10 <- 20 <- 30
// Trick: You need 3 pointers: prev, current, next.

function reverseLinkedList(list) {
  let node = list.head;
  list.head = list.tail; // Swap head and tail
  list.tail = node;

  let prev = null;
  let next = null;

  console.log("--- Reversing... ---");

  for (let i = 0; i < list.length; i++) {
    // 1. Save the next connection before we break it
    next = node.next;

    // 2. REVERSE the pointer (point backwards)
    node.next = prev;

    // 3. Move 'prev' and 'node' one step forward
    prev = node;
    node = next;

    // Debugging logic to show what's happening
    if (prev) console.log(`Processed Node: ${prev.val}`);
  }

  return list;
}

reverseLinkedList(list);
list.print(); // "40 -> 30 -> 20 -> 10"

console.log("\n===============================");
console.log("--- 3. DETECT A CYCLE (Tortoise & Hare) ---");
console.log("===============================");
// Problem: How do you know if a list loops forever (infinite loop)?
// Algorithm: Floyd's Cycle Detection.
// Use two pointers. One moves 1 step, the other moves 2 steps.
// If they effectively "crash" into each other, there is a loop.

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next; // 1 step
    fast = fast.next.next; // 2 steps

    if (slow === fast) {
      return true; // Fast caught up to Slow! Cycle detected.
    }
  }
  return false;
}

// Let's create a fake cycle
const cycleList = new LinkedList();
cycleList.push("A");
cycleList.push("B");
cycleList.push("C");
// Force a loop: Point C back to A
cycleList.tail.next = cycleList.head;

// Be careful! If you try to .print() this, it will crash your browser (infinite loop).
console.log("Has Cycle?", hasCycle(cycleList.head)); // true
