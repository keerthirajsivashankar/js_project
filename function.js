// Define the function. 'name' is a parameter.
function greet(name) {
  console.log("Hello,", name + "!");
}

// Now, "call" the function with different arguments.
greet("Alice"); // Output: Hello, Alice!
greet("Bob"); // Output: Hello, Bob!

function printTable(num, count) {
  for (let i = 0; i <= count; i++) {
    console.log(num, "*", i, "=", num * i);
  }
}

printTable(9, 21);
printTable(5, 5);
