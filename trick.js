// Hey man! Stop using Regex for formatting.
// The browser has a built-in formatting engine called 'Intl'.

console.log("===============================");
console.log("--- 1. CURRENCY & NUMBERS ---");
console.log("===============================");

const price = 123456.789;

// The Old Way (Regex Nightmare):
// price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // 🤮

// The Pro Way (Intl.NumberFormat):
const usCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(price);

const indianCurrency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumSignificantDigits: 3, // Cool option to round nicely
}).format(price);

const japaneseCurrency = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
}).format(price);

console.log("🇺🇸 USD:", usCurrency); // "$123,456.79"
console.log("🇮🇳 INR:", indianCurrency); // "₹1,23,000" (Notice the Indian comma system!)
console.log("🇯🇵 JPY:", japaneseCurrency); // "￥123,457"

console.log("\n===============================");
console.log("--- 2. RELATIVE TIME ('...ago') ---");
console.log("===============================");
// Stop installing 'moment.js' just for this!

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

console.log("Past:", rtf.format(-1, "day")); // "yesterday"
console.log("Future:", rtf.format(5, "minute")); // "in 5 minutes"
console.log("Weeks:", rtf.format(-2, "week")); // "2 weeks ago"

console.log("\n===============================");
console.log("--- 3. NATURAL LISTS ('...and...') ---");
console.log("===============================");
// How do you join an array with commas and an "and" at the end?

const heroes = ["Batman", "Superman", "Wonder Woman"];

// The Old Way (Manual logic):
// heroes.slice(0, -1).join(', ') + ' and ' + heroes[heroes.length - 1];

// The Pro Way (Intl.ListFormat):
const listFormatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction", // 'conjunction' adds "and"
});

const listDisjunction = new Intl.ListFormat("en", {
  style: "short",
  type: "disjunction", // 'disjunction' adds "or"
});

console.log("Heroes:", listFormatter.format(heroes));
// "Batman, Superman, and Wonder Woman"

console.log("Choices:", listDisjunction.format(heroes));
// "Batman, Superman, or Wonder Woman"
