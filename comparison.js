// comparison operater
let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));

if (num1 > num2) {
  console.log(num1, "is greater than", num2);
} else if (num1 < num2) {
  console.log(num1, "is less than", num2);
} else {
  console.log(num1, "is equal to", num2);
}

// equality operator
let val1 = prompt("Enter the first value: ");
let val2 = prompt("Enter the second value: ");
if (val1 === val2) {
  console.log(val1, "is strictly equal to", val2);
} else {
  console.log(val1, "is not strictly equal to", val2);
}

// inequality operator
if (val1 !== val2) {
  console.log(val1, "is not equal to", val2);
} else {
  console.log(val1, "is equal to", val2);
}

// combination of comparison and equality operators
let age = parseInt(prompt("Enter your age: "));
if (age >= 0 && age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age < 20) {
  console.log("You are a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior.");
}
