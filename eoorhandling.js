console.log("=============================================");
console.log("PART 1: The 'try...catch' Block");
console.log("=============================================");
console.log(
  "SITUATION: Use 'try...catch' when you run code you DON'T control, which might fail."
);
console.log("The classic example: Parsing JSON.");

// This is a function that tries to parse a string into an object.
// This is a "risky" operation because the string might be badly formatted.
function parseMyJSON(jsonString) {
  try {
    // 1. We "TRY" the risky part.
    // If this line fails, the code JUMPS immediately to the 'catch' block.
    const myObject = JSON.parse(jsonString);
    console.log("✅ SUCCESS: Parsed object:", myObject);
    return myObject;
  } catch (error) {
    // 2. We "CATCH" the error.
    // The 'error' variable is an object containing details about what went wrong.
    console.log("🔴 ERROR: Oh no! Something went wrong!");
    console.log("   The error was:", error.message); // e.g., "Unexpected token..."
    console.log("   We caught the error, so the program can keep running.");
    return null; // Return 'null' as a signal that it failed.
  }
}

console.log("\n--- Test 1: Good JSON (will succeed) ---");
const goodJSON = '{"name": "Alex", "age": 30}';
parseMyJSON(goodJSON);

console.log("\n--- Test 2: Bad JSON (will fail) ---");
const badJSON = '{"name": "Alex", age: 30}'; // Note: age: 30 is not a valid JSON string key
parseMyJSON(badJSON);

console.log(
  "\n--- 'try...catch' is finished, but the program didn't crash! ---"
);

console.log("\n\n=============================================");
console.log("PART 2: The 'throw' Keyword");
console.log("=============================================");
console.log("SITUATION: Use 'throw' when you want to create YOUR OWN error.");
console.log("This is for VALIDATION, to enforce your app's rules.");

// This function is for your app's logic.
// JavaScript *itself* won't throw an error for dividing by 0 (it returns 'Infinity').
// But what if YOUR APP's rule is "you cannot divide by 0"?
// You can 'throw' your own error to enforce this.
function divide(a, b) {
  if (b === 0) {
    // 1. We check our own rule.
    // 2. If the rule is broken, we "THROW" a new Error.
    // This STOPS the function right here and creates an error.
    throw new Error("Whoops! You can't divide by zero, man.");
  }
  return a / b;
}

// Now, we must use 'try...catch' to *call* our 'divide' function,
// because we know it *might* throw an error.
console.log("\n--- Test 3: Good division (10 / 2) ---");
try {
  const result = divide(10, 2);
  console.log("✅ SUCCESS: Result is:", result);
} catch (error) {
  console.log("🔴 ERROR:", error.message);
}

console.log("\n--- Test 4: Bad division (10 / 0) ---");
try {
  const result = divide(10, 0); // This will THROW
  console.log("✅ SUCCESS: Result is:", result); // This line will never run
} catch (error) {
  // 3. Our 'catch' block catches the error we THREW.
  console.log("🔴 ERROR: We caught the error we threw!");
  console.log("  ", error.message);
}

console.log("\n\n=============================================");
console.log("PART 3: The 'finally' Block");
console.log("=============================================");
console.log(
  "SITUATION: Use 'finally' for cleanup code that MUST run, no matter what."
);
console.log(
  "(e.g., closing a file, hiding a loading spinner, closing a database connection)"
);

function simulateFileOperation(shouldFail) {
  console.log("\nAttempting file operation...");
  try {
    console.log("   Trying: Opening file, writing data...");
    if (shouldFail) {
      // Simulate an error
      throw new Error("Disk is full!");
    }
    console.log("   Success: Wrote to file.");
  } catch (error) {
    console.log("   Caught Error:", error.message);
  } finally {
    // This code runs W-H-E-T-H-E-R the 'try' succeeded OR the 'catch' ran.
    console.log("   Finally: File connection closed. Cleanup complete.");
  }
}

simulateFileOperation(false); // Test a successful run
simulateFileOperation(true); // Test a failed run
