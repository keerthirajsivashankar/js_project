// Hey man! This exposes the "DNA" of JavaScript objects.
// Run this to see how inheritance REALLY works.

console.log("===============================");
console.log("--- 1. WHERE DO METHODS COME FROM? ---");
console.log("===============================");

const myArr = [1, 2, 3];

// We know myArr has data:
console.log("myArr data:", myArr);

// But where is .push()?
console.log("Does myArr have its own .push?", myArr.hasOwnProperty("push"));
// Output: false! (It doesn't own the method!)

// So where is it? It's in the prototype (the parent).
console.log(
  "Is .push in the prototype?",
  Array.prototype.hasOwnProperty("push")
);
// Output: true!

// PROOF: The secret link
// myArr.__proto__ points to Array.prototype
console.log("Link check:", myArr.__proto__ === Array.prototype); // true

console.log("\n===============================");
console.log("--- 2. THE PROTOTYPE CHAIN ---");
console.log("===============================");
// JS looks UP the chain until it finds the property or hits null.

// Level 1: The Array instance
// Level 2: Array.prototype (Where .map, .filter live)
// Level 3: Object.prototype (Where .toString, .hasOwnProperty live)
// Level 4: null (The end of the chain)

console.log("1. myArr (The Array) ->", myArr);
console.log("2. Parent (Array.prototype) ->", myArr.__proto__);
console.log("3. Grandparent (Object.prototype) ->", myArr.__proto__.__proto__);
console.log("4. Great-Grandparent ->", myArr.__proto__.__proto__.__proto__); // null

console.log("\n===============================");
console.log("--- 3. 'MONKEY PATCHING' (Adding your own methods) ---");
console.log("===============================");
// Since Array.prototype is just an object, we can ADD functions to it.
// This will make the method available to EVERY array in your app.

// Let's add a method called 'last()' to get the last item.
Array.prototype.last = function () {
  // 'this' refers to the array calling the method
  return this[this.length - 1];
};

const nums = [10, 20, 50];
const names = ["Alex", "Sam"];

// Now ALL arrays have this new superpower!
console.log("nums.last():", nums.last()); // 50
console.log("names.last():", names.last()); // "Sam"

// WARNING: Don't do this in big projects (it can break libraries).
// But understanding it proves you know how JS works.

console.log("\n===============================");
console.log("--- 4. PROTOTYPES WITH OBJECTS ---");
console.log("===============================");
// Before 'class' existed, we used this to make "classes".

function Robot(name) {
  this.name = name;
}

// We add methods to the Prototype, not the function itself.
// This saves memory. If we added it to 'this.speak',
// every single Robot would have its own copy of the function.
// By putting it on the prototype, 1000 robots share ONE function.
Robot.prototype.speak = function () {
  console.log(`I am ${this.name}`);
};

const robo1 = new Robot("R2D2");
const robo2 = new Robot("C3PO");

robo1.speak(); // "I am R2D2"

// They share the exact same function in memory
console.log(robo1.speak === robo2.speak); // true
