// Hey man! This is "JavaScript Magic Revealed".
// We are going to rebuild the 'new' keyword from scratch.

console.log("===============================");
console.log("--- 1. THE STANDARD WAY ---");
console.log("===============================");

function Person(name, age) {
  // 3. 'this' refers to the new instance
  this.name = name;
  this.age = age;
  // 4. It implicitly returns 'this'
}

// 2. Prototype Linkage happens here automatically
Person.prototype.sayHello = function () {
  console.log(`Hello, I am ${this.name}`);
};

const alex = new Person("Alex", 30);
alex.sayHello();
console.log("Is alex an instance of Person?", alex instanceof Person); // true

console.log("\n===============================");
console.log("--- 2. THE 'CUSTOM NEW' FUNCTION ---");
console.log("===============================");
// Interview Challenge: Replicate 'new' logic manually.

function myNew(Constructor, ...args) {
  // STEP 1: Create a new, empty object.
  const newObj = {};

  // STEP 2: Link the prototype.
  // We tell the new object: "Your parent is the Constructor's prototype".
  // This allows the new object to access methods like 'sayHello'.
  Object.setPrototypeOf(newObj, Constructor.prototype);
  // (Old school way: newObj.__proto__ = Constructor.prototype)

  // STEP 3: Execute the constructor with 'this' bound to the new object.
  // We use .apply() to pass the arguments array.
  const result = Constructor.apply(newObj, args);

  // STEP 4: Return the object.
  // Edge Case: If the constructor explicitly returned an Object, use that.
  // Otherwise, return our created 'newObj'.
  if (result && (typeof result === "object" || typeof result === "function")) {
    return result;
  }

  return newObj;
}

// TEST IT
const sam = myNew(Person, "Sam", 25);

console.log("Custom Sam:", sam); // { name: "Sam", age: 25 }
sam.sayHello(); // "Hello, I am Sam" (It works! Prototype linked!)
console.log("Is Sam an instance of Person?", sam instanceof Person); // true

console.log("\n===============================");
console.log("--- 3. CUSTOM INSTANCEOF (Bonus) ---");
console.log("===============================");
// Interview Challenge: How does 'instanceof' work?
// Answer: It walks up the prototype chain looking for a match.

function myInstanceOf(obj, Constructor) {
  // 1. Get the object's parent (prototype)
  let proto = Object.getPrototypeOf(obj); // or obj.__proto__

  // 2. Loop up the chain
  while (proto) {
    // Found a match?
    if (proto === Constructor.prototype) {
      return true;
    }
    // Keep climbing up
    proto = Object.getPrototypeOf(proto);
  }

  // Hit null (end of chain) without finding it
  return false;
}

console.log("Check Sam vs Person:", myInstanceOf(sam, Person)); // true
console.log("Check Sam vs Array:", myInstanceOf(sam, Array)); // false
