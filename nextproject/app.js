// --- CONFIGURATION ---
const GRID_SIZE = 7;
const BLOCK_RANGE = 2; // 2 before, 2 after

// State: Stores the value in each slot (null if empty)
// Index 0 to 6
let gridState = Array(GRID_SIZE).fill(null);

// The current value being dragged
let currentDragValue = 1;

// --- INITIALIZATION ---
const gridContainer = document.getElementById("grid-container");
const source = document.getElementById("draggable-source");

function initGrid() {
  gridContainer.innerHTML = "";

  for (let i = 0; i < GRID_SIZE; i++) {
    // Create Slot
    const slot = document.createElement("div");
    slot.dataset.index = i;

    // Tailwind Styling for the Slot
    slot.className = `
            slot-transition
            relative w-full h-full 
            bg-slate-700/50 
            border-2 border-dashed border-slate-600 
            rounded-lg 
            flex items-end justify-center pb-2
            overflow-hidden
          `;

    // Events for Drop Logic
    slot.addEventListener("dragover", handleDragOver);
    slot.addEventListener("dragleave", handleDragLeave);
    slot.addEventListener("drop", handleDrop);

    gridContainer.appendChild(slot);
  }

  // Randomize the starting source value
  updateSourceValue();
}

// --- DRAG SOURCE LOGIC ---
source.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", currentDragValue);
  e.dataTransfer.effectAllowed = "copy";
  source.classList.add("opacity-50");
});

source.addEventListener("dragend", () => {
  source.classList.remove("opacity-50");
  clearHighlights();
});

// --- GRID INTERACTION LOGIC ---

function handleDragOver(e) {
  e.preventDefault(); // Necessary to allow dropping

  const slot = e.target.closest("div[data-index]");
  if (!slot) return;

  const index = parseInt(slot.dataset.index);

  // 1. Check if spot is already taken
  if (gridState[index] !== null) {
    e.dataTransfer.dropEffect = "none";
    highlightSlot(index, "error"); // Red (Occupied)
    return;
  }

  // 2. RUN THE "RANGE" LOGIC
  const isBlocked = checkRangeConflicts(index, currentDragValue);

  if (isBlocked) {
    e.dataTransfer.dropEffect = "none";
    highlightSlot(index, "error"); // Red (Blocked by neighbor rules)
    highlightRange(index, "warning"); // Show WHY it is blocked
  } else {
    e.dataTransfer.dropEffect = "copy";
    highlightSlot(index, "success"); // Green (Good to drop)
    highlightRange(index, "info"); // Show the range effect
  }
}

function handleDragLeave(e) {
  clearHighlights();
}

function handleDrop(e) {
  e.preventDefault();
  clearHighlights();

  const slot = e.target.closest("div[data-index]");
  if (!slot) return;

  const index = parseInt(slot.dataset.index);

  // Final Validation before placing
  if (gridState[index] !== null) return;
  if (checkRangeConflicts(index, currentDragValue)) return;

  // --- SUCCESSFUL DROP ---

  // 1. Update State
  gridState[index] = currentDragValue;

  // 2. Render the tile inside the slot
  // We put it in a div to do the "Go Up" animation
  const tile = document.createElement("div");
  tile.className = `
          w-full h-3/4 mx-2 
          bg-emerald-500 
          rounded shadow-lg 
          flex items-center justify-center 
          text-2xl font-bold 
          animate-pop-up
          border-b-4 border-emerald-700
        `;
  tile.innerText = currentDragValue;

  slot.appendChild(tile);

  // 3. Remove dashed border
  slot.classList.remove("border-dashed", "border-slate-600");
  slot.classList.add("border-solid", "border-emerald-500/30");

  // 4. Generate new number for the hand
  updateSourceValue();
}

// --- THE CORE ALGORITHM ---

// Checks i-2 to i+2. Returns TRUE if blocked.
function checkRangeConflicts(currentIndex, valueToCheck) {
  const start = Math.max(0, currentIndex - BLOCK_RANGE);
  const end = Math.min(GRID_SIZE - 1, currentIndex + BLOCK_RANGE);

  for (let i = start; i <= end; i++) {
    if (i === currentIndex) continue; // Don't check self

    // If a neighbor has the SAME value -> BLOCKED
    if (gridState[i] === valueToCheck) {
      return true;
    }
  }
  return false;
}

// --- VISUAL HELPERS ---

function highlightSlot(index, type) {
  const slot = gridContainer.children[index];
  if (type === "error") {
    slot.classList.add("bg-red-500/20", "border-red-500");
  } else if (type === "success") {
    slot.classList.add("bg-emerald-500/20", "border-emerald-500");
  }
}

function highlightRange(centerIndex, type) {
  const start = Math.max(0, centerIndex - BLOCK_RANGE);
  const end = Math.min(GRID_SIZE - 1, centerIndex + BLOCK_RANGE);

  for (let i = start; i <= end; i++) {
    if (i === centerIndex) continue;
    const neighbor = gridContainer.children[i];

    if (type === "warning") {
      // Highlight neighbors red to show they are causing the block
      neighbor.classList.add("bg-red-500/10");
    } else if (type === "info") {
      // Highlight range blue to show influence area
      neighbor.classList.add("bg-blue-500/10");
    }
  }
}

function clearHighlights() {
  const slots = Array.from(gridContainer.children);
  slots.forEach((slot) => {
    // Keep the solid border if it has an item, otherwise revert styles
    const hasItem = slot.children.length > 0;

    slot.classList.remove(
      "bg-red-500/20",
      "border-red-500",
      "bg-emerald-500/20",
      "border-emerald-500",
      "bg-red-500/10",
      "bg-blue-500/10"
    );

    if (!hasItem) {
      // Reset to default empty state
    }
  });
}

function updateSourceValue() {
  // Random number between 1 and 3 for demo purposes
  currentDragValue = Math.floor(Math.random() * 3) + 1;
  source.innerText = currentDragValue;
}

function resetGrid() {
  gridState = Array(GRID_SIZE).fill(null);
  initGrid();
}

// Run on start
initGrid();
