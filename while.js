//while loop in js

let i = 1;
while (i <= 25) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "FizzBUzz");
    i++;
  } else if (i % 3 === 0) {
    console.log(i, "fizz");
    i++;
  } else if (i % 5 === 0) {
    console.log(i, "buzz");
    i++;
  } else {
    console.log(i);
    i++;
  }
}

// do while loop in js

let j = 1;
do {
  if (j % 4 === 0) {
    j++;
    continue;
  } else {
    console.log(j);
    j++;
  }
} while (j <= 25);
