// Hey man! This is "Recursion Mastery".
// Learn this, and you can handle any messy API response.

console.log("===============================");
console.log("--- 1. FLATTENING ARRAYS (The Interview Standard) ---");
console.log("===============================");

const messyArray = [1, [2, [3, 4], 5], [6, 7]];
// Goal: [1, 2, 3, 4, 5, 6, 7]

// METHOD A: The "Cheat" (Built-in)
// .flat(depth) -> depth 'Infinity' goes all the way down
const easyFlat = messyArray.flat(Infinity);
console.log("1. Built-in .flat():", easyFlat);

// METHOD B: The "Interview" (Recursive)
function customFlat(arr) {
  let result = [];

  for (let item of arr) {
    // Check: Is this item ITSELF an array?
    if (Array.isArray(item)) {
      // RECURSION: Yes! So flatten THIS item and add its results.
      // We assume customFlat() works, so we call it.
      const innerItems = customFlat(item);

      // We spread (...) the results into our main list
      result.push(...innerItems);
    } else {
      // BASE CASE: No, it's just a number. Keep it.
      result.push(item);
    }
  }

  return result;
}

console.log("2. Custom Recursive Flat:", customFlat(messyArray));

// METHOD C: The "Pro One-Liner" (Reduce + Recursion)
// This is for showing off.
const oneLineFlat = (arr) => {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? oneLineFlat(item) : item);
  }, []);
};

console.log("3. One-Liner Flat:", oneLineFlat(messyArray));

console.log("\n===============================");
console.log("--- 2. FLATTENING OBJECTS (The Real World Problem) ---");
console.log("===============================");
// Scenario: You get a complex JSON from an API, but you want simple keys for a table.

const messyUser = {
  name: "Alex",
  address: {
    personal: {
      city: "New York",
      zip: "10001",
    },
    work: {
      city: "San Francisco",
    },
  },
  status: "Active",
};

/*
  Goal Output:
  {
    "name": "Alex",
    "address.personal.city": "New York",
    "address.personal.zip": "10001",
    "address.work.city": "San Francisco",
    "status": "Active"
  }
*/

function flattenObject(obj, parentKey = "") {
  let result = {};

  for (let key in obj) {
    // 1. Construct the new key name (e.g., "address.personal.city")
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    // 2. Check if the value is an Object (and not null/array)
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      // RECURSION: Dig deeper!
      // Pass the 'newKey' as the parent for the next level
      const deepObject = flattenObject(obj[key], newKey);

      // Merge the deep results into our main result
      // Object.assign(target, source)
      Object.assign(result, deepObject);
    } else {
      // BASE CASE: It's a value. Save it.
      result[newKey] = obj[key];
    }
  }

  return result;
}

console.log("4. Flattened Object:", flattenObject(messyUser));
