// Creating an array of strings
let groceries = ["Milk", "Bread", "Eggs", "Cheese"];

console.log(groceries[0]); // Output: Milk
console.log(groceries[1]); // Output: Bread
console.log("Number of items to buy:", groceries.length); // Output: 4

let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  console.log("Item at index", i, "is", numbers[i]);
}

function findSum(nums) {
  if (nums.length === 0) {
    console.log("sum = 0");
  }
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log("sum = ", sum);
}
let nums = [5, 10, 15, 20];
findSum(nums);
