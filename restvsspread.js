console.log("======================================");
console.log("⬇️ 1. The SPREAD Operator (EXPANDS) ⬇️");
console.log("======================================");

// Example A: Combining (concatenating) arrays
console.log("\n--- Example A: Combining arrays ---");
const fruits = ["🍎", "🍌"];
const veggies = ["🥦", "🥕"];
// ...fruits becomes "🍎", "🍌"
// ...veggies becomes "🥦", "🥕"
const food = [...fruits, "🥪", ...veggies]; // <-- SPREAD
console.log("...['🍎', '🍌'], '🥪', ...['🥦', '🥕']");
console.log("Result:", food);
// Result: ["🍎", "🍌", "🥪", "🥦", "🥕"]

// Example B: Copying an array
console.log("\n--- Example B: Copying an array ---");
const original = ["a", "b", "c"];
const copy = [...original]; // <-- SPREAD
copy.push("d"); // Modify the copy
console.log("Original:", original); // Original is unchanged
console.log("Copy:", copy);
// Result: original is ["a", "b", "c"], copy is ["a", "b", "c", "d"]

// Example C: Combining objects
console.log("\n--- Example C: Combining objects ---");
const person = { name: "Alex", age: 30 };
const job = { title: "Developer", company: "Tech Co" };
// ...person becomes name: "Alex", age: 30
// ...job becomes title: "Developer", company: "Tech Co"
const employee = { ...person, ...job, location: "NYC" }; // <-- SPREAD
console.log("Employee:", employee);
// Result: { name: "Alex", age: 30, title: "Developer", company: "Tech Co", location: "NYC" }

// Example D: In a function call (spreading arguments)
console.log("\n--- Example D: In a function call ---");
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [10, 20, 30];
// ...numbers becomes 10, 20, 30
// The call becomes sum(10, 20, 30)
const total = sum(...numbers); // <-- SPREAD
console.log("Calling sum(...[10, 20, 30])");
console.log("Result:", total);
// Result: 60

console.log("\n\n======================================");
console.log("⬇️ 2. The REST Operator (COLLECTS) ⬇️");
console.log("======================================");

// Example A: In a function definition (collecting arguments)
console.log("\n--- Example A: In a function definition ---");
// Here, '...children' is COLLECTING all other arguments into an array.
function showFamily(father, mother, ...children) {
  // <-- REST
  console.log("Father:", father);
  console.log("Mother:", mother);
  console.log("Children (collected into an array):", children);
}
console.log("Calling showFamily('John', 'Jane', 'Tim', 'Sue', 'Tom')");
showFamily("John", "Jane", "Tim", "Sue", "Tom");
// father = "John"
// mother = "Jane"
// children = ["Tim", "Sue", "Tom"]

// Example B: In array destructuring (collecting elements)
console.log("\n--- Example B: In array destructuring ---");
const scores = [95, 88, 76, 65, 50];
// Here, '...rest' is COLLECTING the remaining scores into an array.
const [first, second, ...restOfScores] = scores; // <-- REST
console.log("Destructuring [95, 88, 76, 65, 50]");
console.log("First:", first);
console.log("Second:", second);
console.log("Rest of Scores:", restOfScores);
// first = 95
// second = 88
// restOfScores = [76, 65, 50]

// Example C: In object destructuring (collecting properties)
console.log("\n--- Example C: In object destructuring ---");
const user = {
  id: 1,
  username: "dev_alex",
  email: "alex@example.com",
  city: "London",
};
// Here, '...details' is COLLECTING the remaining properties into an object.
const { id, username, ...details } = user; // <-- REST
console.log("Destructuring a user object");
console.log("ID:", id);
console.log("Username:", username);
console.log("Details (collected into an object):", details);
// id = 1
// username = "dev_alex"
// details = { email: "alex@example.com", city: "London" }
