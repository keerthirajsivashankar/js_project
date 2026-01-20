// Hey man! This is "Under the Hood" of loops.
// We are going to teach a regular Object how to behave like an Array.

console.log("===============================");
console.log("--- 1. WHAT IS A SYMBOL? ---");
console.log("===============================");

// Symbols are the 7th Primitive Type (String, Number, Boolean, Null, Undefined, BigInt, Symbol).
// They are ALWAYS unique.

const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log("sym1 === sym2?", sym1 === sym2); // false! (Even with same description)

// They are used as "Hidden Keys" in objects.
const user = {
  name: "Alex",
  [sym1]: "Hidden ID 123",
};

console.log("User name:", user.name);
console.log("User[sym1]:", user[sym1]);

// Fun Fact: Symbols are invisible to standard loops!
console.log("Keys in User:", Object.keys(user)); // ['name'] (Symbol is hidden)

console.log("\n===============================");
console.log("--- 2. THE ITERATOR PROTOCOL ---");
console.log("===============================");
// How does 'for...of' actually work?
// It looks for a function at [Symbol.iterator].

const arr = ["A", "B"];
// Let's grab the iterator manually
const iterator = arr[Symbol.iterator]();

console.log("1. Manual Next:", iterator.next()); // { value: "A", done: false }
console.log("2. Manual Next:", iterator.next()); // { value: "B", done: false }
console.log("3. Manual Next:", iterator.next()); // { value: undefined, done: true }

console.log("\n===============================");
console.log("--- 3. MAKING A CUSTOM ITERABLE OBJECT ---");
console.log("===============================");

// Scenario: A "Range" object.
// We want to write: for (const num of range) { ... }
const range = {
  start: 1,
  end: 5,

  // We add the special method!
  [Symbol.iterator]() {
    let current = this.start;
    let last = this.end;

    // Must return an object with a 'next()' function
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// TEST IT
console.log("Looping over our Object:");
for (const num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}

// BONUS: Because it is iterable, the Spread Operator works now!
console.log("Spreading our Object into an Array:");
const rangeArray = [...range];
console.log(rangeArray); // [1, 2, 3, 4, 5]
