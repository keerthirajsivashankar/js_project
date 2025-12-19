// Hey man! This is "Under the Hood" of JavaScript.
// We are going to re-create the most popular array methods from scratch.

console.log("===============================");
console.log("--- 1. BUILDING .map() ---");
console.log("===============================");

// 1. We attach it to Array.prototype so ALL arrays can use it.
Array.prototype.myMap = function (callback) {
  // 'this' refers to the array we are calling .myMap on.
  const tempArray = [];

  for (let i = 0; i < this.length; i++) {
    // 2. We run the user's callback for every item.
    // callback(currentItem, currentIndex, actualArray)
    const result = callback(this[i], i, this);

    // 3. Push the result to our new array
    tempArray.push(result);
  }

  // 4. Return the new array (Map returns a NEW array)
  return tempArray;
};

// TEST IT
const nums = [1, 2, 3];
const doubled = nums.myMap((num) => num * 2);
console.log("Original:", nums);
console.log("My Map Doubled:", doubled); // [2, 4, 6]

console.log("\n===============================");
console.log("--- 2. BUILDING .filter() ---");
console.log("===============================");

Array.prototype.myFilter = function (callback) {
  const tempArray = [];

  for (let i = 0; i < this.length; i++) {
    // 1. Run the callback. It returns TRUE or FALSE.
    const passesTest = callback(this[i], i, this);

    // 2. If true, keep the item.
    if (passesTest) {
      tempArray.push(this[i]);
    }
  }

  return tempArray;
};

// TEST IT
const ages = [10, 25, 30, 15];
const adults = ages.myFilter((age) => age >= 18);
console.log("My Filter Adults:", adults); // [25, 30]

console.log("\n===============================");
console.log("--- 3. THE BOSS LEVEL: .reduce() ---");
console.log("===============================");
// This is the hardest one.
// reduce(callback, initialValue)

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  // EDGE CASE: If no initialValue is provided,
  // take the first element as the accumulator.
  if (arguments.length === 1) {
    accumulator = this[0];
    startIndex = 1; // Start looping from the second item
  }

  for (let i = startIndex; i < this.length; i++) {
    // callback(accumulator, currentItem, index, array)
    // The result becomes the NEW accumulator for the next loop
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

// TEST IT
const prices = [10, 20, 30, 40];

const total = prices.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("My Reduce Total:", total); // 100
