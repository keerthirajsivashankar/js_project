//arbitary arguments
function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add(1, 2, 3, 4, 5));

//spread operator
let arr = [1, 2, 3, 4, 5];
console.log(add(...arr));

//rest operator
function add(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}

console.log(add(1, 2, 3, 4, 5));

//functions as expression

let add1 = function (...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
};

console.log(add1(1, 2, 3, 4, 5));

//arrow function

let add2 = (...nums) => {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
};

console.log(add2(1, 2, 3, 4, 5));
