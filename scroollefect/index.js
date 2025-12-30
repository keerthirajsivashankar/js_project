// --- TRICK 1: DIALOG API ---
const modal = document.getElementById("my-modal");

function openModal() {
  // .showModal() creates the backdrop and handles focus trapping automatically.
  // Don't use .show(), use .showModal() for the full effect.
  modal.showModal();
}

// We don't need a close function because the form method="dialog" handles it!

// --- TRICK 2: SMOOTH SCROLL ---
function scrollToBox(letter) {
  const element = document.getElementById(`box-${letter}`);

  // THE MAGIC LINE
  element.scrollIntoView({
    behavior: "smooth", // Makes it scroll nicely
    block: "center", // Centers it vertically
    inline: "center", // Centers it horizontally
  });
}

// --- TRICK 3: CONTENT EDITABLE ---
// No JS needed for the typing part!
// But here is how you save the data:
const editableDiv = document.querySelector("[contenteditable]");

editableDiv.addEventListener("input", () => {
  console.log("Saving new content:", editableDiv.innerHTML);
  // You would send editableDiv.innerHTML to your database here.
});
