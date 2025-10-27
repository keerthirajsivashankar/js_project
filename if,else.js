let age = parseInt(prompt("How old are you?"));

if (age >= 18) {
  console.log("You are old enough to vote!");
} else {
  console.log("You are not old enough to vote yet.");
}

console.log("This message will always run.");

let input = parseInt(prompt("Enter the number : "));

if (input < 0) {
  console.log(input, "is negative");
} else if (input > 0) {
  console.log(input, "is positive");
} else {
  console.log(input, "is Zero");
}
