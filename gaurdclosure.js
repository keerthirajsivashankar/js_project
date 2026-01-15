// Hey man! This is your guide to writing "Senior-Level" clean code.
// No more messy nested ifs or giant switch statements.

console.log("========================================");
console.log("--- 1. GUARD CLAUSES (Death to Nesting) ---");
console.log("========================================");

// ❌ THE BAD WAY (Pyramid of Doom)
// Hard to read because you have to keep track of the nesting levels.
function getDiscountBad(user) {
  if (user) {
    if (user.isActive) {
      if (user.plan === "premium") {
        return 20;
      } else {
        return 10;
      }
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

// ✅ THE PRO WAY (Guard Clauses)
// Handle edge cases EARLY and return. This keeps the "happy path" flat.
function getDiscountGood(user) {
  // 1. Guard: Check existence
  if (!user) return 0;

  // 2. Guard: Check active status
  if (!user.isActive) return 0;

  // 3. Main Logic (Flat and simple!)
  if (user.plan === "premium") return 20;
  return 10;
}

console.log("Discount:", getDiscountGood({ isActive: true, plan: "premium" })); // 20

console.log("\n========================================");
console.log("--- 2. STRATEGY PATTERN (Death to Switch) ---");
console.log("========================================");

// Scenario: A Payment Processor.

// ❌ THE BAD WAY (Giant Switch Statement)
// This grows forever. Every time you add a method, you modify this function (Violates Open/Closed Principle).
function payBad(method, amount) {
  switch (method) {
    case "paypal":
      console.log(`Paid $${amount} with PayPal.`);
      break;
    case "stripe":
      console.log(`Paid $${amount} with Stripe.`);
      break;
    case "crypto":
      console.log(`Paid $${amount} with Bitcoin.`);
      break;
    default:
      console.log("Invalid payment method.");
  }
}

// ✅ THE PRO WAY (Object Lookup / Strategy)
// You define the logic in an object. It's cleaner and faster (O(1) lookup).

const paymentStrategies = {
  paypal: (amount) => console.log(`Paid $${amount} with PayPal 🅿️`),
  stripe: (amount) => console.log(`Paid $${amount} with Stripe 💳`),
  crypto: (amount) => console.log(`Paid $${amount} with Bitcoin ₿`),
};

function payGood(method, amount) {
  const strategy = paymentStrategies[method];

  if (!strategy) {
    console.error("❌ Invalid payment method");
    return;
  }

  strategy(amount);
}

payGood("stripe", 100);
payGood("crypto", 500);

console.log("\n========================================");
console.log("--- 3. FACTORY FUNCTIONS (Cleaner Objects) ---");
console.log("========================================");

// Classes can be confusing with 'this' and 'new'.
// Factories are just functions that return objects. They enable true PRIVACY (Closures).

// ❌ CLASS WAY (No real private variables in older JS)
class UserClass {
  constructor(name) {
    this.name = name;
    this.token = "SECRET_123"; // Oops, anyone can access this! user.token
  }
}

// ✅ FACTORY WAY
function createUser(name) {
  // Private variable (Closure)
  const token = "SECRET_" + Math.floor(Math.random() * 1000);

  return {
    name, // Shorthand for name: name

    // We expose a method to USE the token, but not the token itself.
    getToken() {
      return `Token is ${token}`;
    },

    // We can explicitly define what is "public"
    sayHi: () => console.log(`Hi, I'm ${name}!`),
  };
}

const user1 = createUser("Alex");
user1.sayHi();
console.log(user1.getToken()); // Works!
console.log(user1.token); // undefined! (It's truly private)
