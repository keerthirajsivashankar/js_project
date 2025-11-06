let str = "Hello , world";

// original array

console.log(str);

// length of the string
console.log("length of the string is : " + str.length);

// accessing charaters
console.log("character at index 4 : " + str.charAt(4));

// accessing charaters using []
console.log("character at index 6 : " + str[6]);

// concatenation of strings
let str2 = " How are you?";
let str3 = str.concat(str2);
console.log("After concatenation : " + str3);

// replacing characters
let str4 = str.replace("world", "everyone");
console.log("After replacement : " + str4);

// substring
let str5 = str.substring(0, 5);
console.log("After substring : " + str5);

//escaping
let str6 = 'this is a "string"';
console.log("After escaping : " + str6);
//let str7 = 'she cant\'t run';

// string to array
let str8 = "Hello , world";
let arr = str8.split(",");
console.log("After splitting : " + arr);

//upper case
let str9 = "hello world";
let str10 = str9.toUpperCase();
console.log("After upper case : " + str10);

//lower case
let str11 = "HELLO WORLD";
let str12 = str11.toLowerCase();
console.log("After lower case : " + str12);

//trim
let str13 = "   hello world   ";
let str14 = str13.trim();
console.log("After trim : " + str14);

//search
let str15 = "hello world";
let str16 = str15.search("world");
console.log("After search : " + str16);

//captalize
let str17 = "hello world";
let str18 = str17.charAt(0).toUpperCase() + str17.slice(1);
console.log("After capitalize : " + str18);

//slice is used to extract a part of a string
let str19 = "hello world";
let str20 = str19.slice(0, 5);
console.log("After slice : " + str20);

//repeat
let str21 = "hello";
let str22 = str21.repeat(3);
console.log("After repeat : " + str22);

//indexof
let str23 = "hello world";
let str24 = str23.indexOf("world");
console.log("After indexof : " + str24);

//lastindexof
let str25 = "hello world";
let str26 = str25.lastIndexOf("world");
console.log("After lastindexof : " + str26);

//includes
let str27 = "hello world";
let str28 = str27.includes("world");
console.log("After includes : " + str28);

//charcodeat
let str29 = "hello world";
let str30 = str29.charCodeAt(0);
console.log("After charcodeat : " + str30);

//substr
let str31 = "hello world";
let str32 = str31.substr(0, 5);
console.log("After substr : " + str32);

//trimstart
let str33 = "   hello world   ";
let str34 = str33.trimStart();
console.log("After trimstart : " + str34);

//trimend
let str35 = "   hello world   ";
let str36 = str35.trimEnd();
console.log("After trimend : " + str36);

//at
let str37 = "hello world";
let str38 = str37.at(0);
console.log("After at : " + str38);

//replace all
let str39 = "hello world world";
let str40 = str39.replaceAll("world", "everyone");
console.log("After replaceAll : " + str40);

//startswith
let str41 = "hello world";
let str42 = str41.startsWith("hello");
console.log("After startsWith : " + str42);

//endswith
let str43 = "hello world";
let str44 = str43.endsWith("world");
console.log("After endsWith : " + str44);

//padstart
let str45 = "5";
let str46 = str45.padStart(10, 0);
console.log("After padstart : " + str46);

//padend
let str47 = "5";
let str48 = str47.padEnd(10, 0);
console.log("After padend : " + str48);

// long literam strings
let str49 =
  "hello world " +
  " hello world" +
  " hello world" +
  " hello world" +
  " hello world";
console.log("After long literam strings : " + str49);

let str50 = `hello world
hello world
hello world
hello world
hello world`;
console.log("After long literam strings : " + str50);

//fromcharcode
let str51 = String.fromCharCode(97, 98, 99, 100, 101);
console.log("After fromcharcode : " + str51);
