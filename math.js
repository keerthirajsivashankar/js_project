// Math functions

//pi fuction returhns 3.14
let pi = Math.PI;
console.log(pi);

//e function returhns e value
let e = Math.E;
console.log(e);

//round function returns the nearest integer
let num = 3.14;
console.log(Math.round(num));

//ceil function returns the smallest integer greater than or equal to a given number
let num1 = 3.14;
console.log(Math.ceil(num1));

//floor function returns the largest integer less than or equal to a given number
let num2 = 3.14;
console.log(Math.floor(num2));

//abs function returns the absolute value of a number
let num3 = -3.14;
console.log(Math.abs(num3));

//pow function returns the result of raising a base to a power
let base = 2;
let power = 3;
console.log(Math.pow(base, power));

//sqrt function returns the square root of a number
let num4 = 9;
console.log(Math.sqrt(num4));

//random function returns a random number between 0 and 1
console.log(Math.random());

//trunc function returns the integer part of a number
let num5 = 3.14;
console.log(Math.trunc(num5));

//max function returns the largest number in an array
let arr = [1, 2, 3, 4, 5];
console.log(Math.max(...arr));

//min function returns the smallest number in an array
let arr1 = [1, 2, 3, 4, 5];
console.log(Math.min(...arr1));

//random number betwwen 1 to 100

console.log(Math.floor(Math.random() * 100 + 1));

// sign function returns the sign of a number
let num6 = -3.14;
console.log(Math.sign(num6));

//cbrt function returns the cube root of a number
let num7 = 8;
console.log(Math.cbrt(num7));

// sin , cos , tan , asin , acos , atan

let angle = Math.PI / 2;
console.log(Math.sin(angle));
console.log(Math.cos(angle));
console.log(Math.tan(angle));
console.log(Math.asin(angle));
console.log(Math.acos(angle));
console.log(Math.atan(angle));

//log function returns the natural logarithm of a number
let num8 = 10;
console.log(Math.log(num8));

//log10 function returns the base 10 logarithm of a number
let num9 = 100;
console.log(Math.log10(num9));

//exp function returns the exponential of a number
let num10 = 2;
console.log(Math.exp(num10));
