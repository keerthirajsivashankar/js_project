// Hey man! This visualizes how JavaScript "hunts" for variables.
// It climbs the "Scope Chain" ladder.

console.log("===============================");
console.log("--- 1. BLOCK vs. FUNCTION SCOPE ---");
console.log("===============================");

function scopeTest() {
  if (true) {
    var functionScoped = "I am VAR (Function Scoped)";
    let blockScoped = "I am LET (Block Scoped)";
    const alsoBlockScoped = "I am CONST (Block Scoped)";
  }

  // 1. VAR leaks out of the 'if' block
  console.log("Accessing VAR:", functionScoped); // Works!

  // 2. LET/CONST die inside the 'if' block
  try {
    console.log(blockScoped);
  } catch (e) {
    console.log("Accessing LET:", "❌ Error! " + e.message);
  }
}

scopeTest();

console.log("\n===============================");
console.log("--- 2. THE SCOPE CHAIN (The Ladder) ---");
console.log("===============================");

// GLOBAL SCOPE
const grandpa = "Grandpa's House";

function parent() {
  // OUTER SCOPE
  const dad = "Dad's Car";

  function child() {
    // LOCAL SCOPE
    const kid = "Kid's Toy";

    console.log("--- Inside Child Function ---");
    // 1. Look inside Child? Found 'kid'.
    console.log(kid);

    // 2. Look inside Child? No. Look up to Parent? Found 'dad'.
    console.log(dad);

    // 3. Look inside Child? No. Parent? No. Global? Found 'grandpa'.
    console.log(grandpa);

    // 4. Look for 'unknown'? No... No... No... CRASH (ReferenceError).
  }

  child();
}

parent();

console.log("\n===============================");
console.log("--- 3. LEXICAL SCOPING (The Tricky Part) ---");
console.log("===============================");
// "Lexical" means "Where it is WRITTEN".
// JS cares about where you WROTE the function, not where you CALL it.

const secret = "I am the GLOBAL secret";

function revealSecret() {
  // This function was WRITTEN in the Global Scope.
  // Its outer scope is GLOBAL.
  console.log("The secret is:", secret);
}

function thief() {
  const secret = "I am the THIEF'S secret";

  // We call revealSecret inside thief.
  // Does it see the Thief's secret? Or the Global secret?
  console.log("Calling revealSecret inside thief...");
  revealSecret();
}

thief();

// RESULT: "I am the GLOBAL secret".
// WHY? Because 'revealSecret' was WRITTEN in the global scope.
// It remembers its birth place (Lexical Environment), ignoring the 'thief' caller.
