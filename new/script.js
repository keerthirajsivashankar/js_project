// --- GENERIC VALIDATION FUNCTION ---
function validate(input, regex) {
  const msg = input.nextElementSibling;

  // .test() is the main Regex method. Returns TRUE or FALSE.
  if (regex.test(input.value)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    msg.innerText = "✅ Looks good!";
    msg.className = "text-xs mt-1 h-4 text-green-600 font-bold";
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
    msg.innerText = "❌ Invalid format";
    msg.className = "text-xs mt-1 h-4 text-red-500 font-bold";
  }
}

// --- PASSWORD SPECIFIC LOGIC ---
function validatePassword(input) {
  const val = input.value;
  const upper = document.getElementById("rule-upper");
  const digit = document.getElementById("rule-digit");
  const len = document.getElementById("rule-len");

  // 1. Check Uppercase
  // /[A-Z]/ checks for ANY capital letter
  if (/[A-Z]/.test(val)) {
    upper.className = "bg-green-100 p-1 rounded text-green-600";
  } else {
    upper.className = "bg-gray-200 p-1 rounded text-gray-400";
  }

  // 2. Check Digit
  // /\d/ checks for ANY number 0-9
  if (/\d/.test(val)) {
    digit.className = "bg-green-100 p-1 rounded text-green-600";
  } else {
    digit.className = "bg-gray-200 p-1 rounded text-gray-400";
  }

  // 3. Check Length
  // .length is faster than Regex for simple counting
  if (val.length >= 8) {
    len.className = "bg-green-100 p-1 rounded text-green-600";
  } else {
    len.className = "bg-gray-200 p-1 rounded text-gray-400";
  }

  // Combined visual feedback
  if (/[A-Z]/.test(val) && /\d/.test(val) && val.length >= 8) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
