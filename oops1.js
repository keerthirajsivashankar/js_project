// Hey man! This is Level 2 of OOP in JavaScript.
// We are covering Privacy, Accessors, and Static Utilities.

console.log("===============================");
console.log("--- 1. PRIVATE FIELDS (True Encapsulation) ---");
console.log("===============================");
// In old JS, we used _variable to "pretend" it was private.
// In modern JS, we use the hash (#) symbol. It enforces privacy at the engine level.
// NOTE: This requires Node.js 12+ or a modern browser (Chrome 74+).

class BankAccount {
  // 1. Define private fields at the top
  #balance = 0;
  #pin = 1234;

  constructor(owner) {
    this.owner = owner; // Public property
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ${amount}. New Balance is hidden.`);
  }

  // Public method to access private data securely
  getBalance(enteredPin) {
    if (enteredPin !== this.#pin) {
      return "ACCESS DENIED 🛑";
    }
    return this.#balance;
  }
}

const myAccount = new BankAccount("Alex");
myAccount.deposit(100);

// console.log(myAccount.#balance); // ❌ CRASH! Syntax Error. Private field.

// FIXED: Changed 0000 to 0 (Leading zeros are not allowed in strict mode)
console.log("1. Wrong Pin:", myAccount.getBalance(0)); // Access Denied
console.log("2. Right Pin:", myAccount.getBalance(1234)); // 100

console.log("\n===============================");
console.log("--- 2. GETTERS AND SETTERS ---");
console.log("===============================");
// Use these to add logic (validation or formatting) when reading/writing properties.
// It looks like a variable (obj.prop), but runs a function behind the scenes.

class User {
  constructor(name) {
    this._name = name; // Convention: internal property often starts with _
  }

  // GETTER: Run this when someone reads 'user.name'
  get name() {
    return this._name.toUpperCase();
  }

  // SETTER: Run this when someone sets 'user.name = "..."'
  set name(newName) {
    if (newName.length < 3) {
      console.log("❌ Error: Name is too short!");
      return;
    }
    this._name = newName;
  }
}

const user = new User("sam");
console.log("1. Get Name:", user.name); // "SAM" (The getter uppercased it)

console.log("2. Setting short name...");
user.name = "Jo"; // ❌ Setter blocked this change

console.log("3. Setting valid name...");
user.name = "Jordan"; // ✅ Setter allowed this
console.log("   New Name:", user.name); // "JORDAN"

console.log("\n===============================");
console.log("--- 3. STATIC METHODS ---");
console.log("===============================");
// Methods that belong to the CLASS itself, not the OBJECT instance.
// You call them like Math.max() -> Math is the class.

class Calculator {
  // A utility function. It doesn't need any instance data ('this').
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

// const calc = new Calculator();
// calc.add(1, 2); // ❌ Error! 'add' doesn't exist on the instance.

console.log("Static Add:", Calculator.add(5, 10)); // 15
console.log("Static Sub:", Calculator.subtract(10, 3)); // 7

console.log("\n===============================");
console.log("--- 4. THE 'THIS' TRAP IN CLASSES ---");
console.log("===============================");
// Interview Q: "Why do I lose 'this' when I pass a class method as a click handler?"

class Button {
  constructor(label) {
    this.label = label;
  }

  // Regular Method
  click() {
    // 'this' depends on who calls it.
    // We use optional chaining (?.) to safely access label if 'this' is undefined
    console.log(`Regular Method: ${this?.label}`);
  }

  // FIX: Arrow Function Property
  // Arrow functions lock 'this' to the Class Instance forever.
  arrowClick = () => {
    console.log(`Arrow Method:   ${this.label}`);
  };
}

const btn = new Button("Submit");

console.log("1. Direct Call:");
btn.click(); // Works ("Submit")

console.log("2. Detached Call (The Trap):");
// Imagine passing this to 'setTimeout' or 'onClick'
const looseClick = btn.click;
looseClick();
// Output: undefined (Because 'this' became the global scope or undefined)

console.log("3. Arrow Function Fix:");
const safeClick = btn.arrowClick;
safeClick();
// Output: "Submit" (It remembered the instance!)
