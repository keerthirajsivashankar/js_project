for (let i = 0; i < 5; i++) {
  console.log("Counting is : ", i);
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Tables code

for (let i = 0; i <= 12; i++) {
  console.log("2 *", i, "=", i * 2);
}

// for of loop

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let num of arr) {
  console.log(num);
}

let names = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

for (let name of names) {
  console.log(name);
}

let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
};

for (let key in obj) {
  console.log(key + ":" + obj[key]);
}

let objVal = Object.values(obj);
let objKeys = Object.keys(obj);

console.log(objVal);
console.log(objKeys);

console.table(obj);

let objEntries = Object.entries(obj);
console.log(objEntries);
