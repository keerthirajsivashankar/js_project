// --- EXAMPLE 1: MODAL LOGIC ---
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

function openModal() {
  // JS just swaps the classes!
  // REMOVE the "hidden" state
  modal.classList.remove("opacity-0");
  modal.classList.remove("scale-90");
  modal.classList.remove("pointer-events-none");

  // ADD the "visible" state
  modal.classList.add("opacity-100");
  modal.classList.add("scale-100");
  modal.classList.add("pointer-events-auto");
}

function closeModal() {
  // JS just swaps the classes back!
  // REMOVE the "visible" state
  modal.classList.remove("opacity-100");
  modal.classList.remove("scale-100");
  modal.classList.remove("pointer-events-auto");

  // ADD the "hidden" state
  modal.classList.add("opacity-0");
  modal.classList.add("scale-90");
  modal.classList.add("pointer-events-none");
}

// Add the event listeners
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
// Optional: Close modal if background is clicked
modal.addEventListener("click", (e) => {
  // Only close if the click is on the modal backdrop itself
  if (e.target === modal) {
    closeModal();
  }
});

// --- EXAMPLE 2: SPINNER LOGIC ---
const spinBtn = document.getElementById("spinBtn");
const spinner = document.getElementById("spinner");

spinBtn.addEventListener("click", () => {
  // This is the magic.
  // .toggle() adds the class if it's missing,
  // and removes it if it's present.
  spinner.classList.toggle("animate-spin");
});
