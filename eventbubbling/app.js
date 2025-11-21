const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const logDiv = document.getElementById("log");

function log(msg) {
  logDiv.innerHTML += `> ${msg}<br>`;
  logDiv.scrollTop = logDiv.scrollHeight; // Auto scroll
}

// We add listeners to ALL three
grandparent.addEventListener("click", (e) => {
  log("🔴 Grandparent Clicked!");
});

parent.addEventListener("click", (e) => {
  log("🔵 Parent Clicked!");

  // INTERVIEW TIP: Uncomment this line to STOP bubbling
  // e.stopPropagation();
});

child.addEventListener("click", (e) => {
  log("🟡 Child Clicked!");
});

// --- LOGIC FOR SECTION 2: DELEGATION ---

const list = document.getElementById("todo-list");
const addBtn = document.getElementById("add-btn");

// THE MAGIC: ONE listener for the WHOLE list
list.addEventListener("click", (e) => {
  // e.target is EXACTLY what you clicked (could be the span, the li, or the button)

  // We only care if they clicked the DELETE button
  // We use .contains() or .matches() or .classList check
  if (e.target.classList.contains("delete-btn")) {
    const listItem = e.target.parentElement;
    listItem.remove();
    alert("Deleted item via Delegation!");
  } else {
    console.log("You clicked the list, but not the delete button.");
  }
});

// Adding new items proves delegation works
// We don't need to add new listeners for new items!
addBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.className =
    "p-4 border-b hover:bg-gray-50 flex justify-between cursor-pointer";
  newItem.innerHTML = `
          <span>Dynamic Item</span> 
          <button class="delete-btn text-red-500 font-bold">X</button>
        `;
  list.appendChild(newItem);
});
