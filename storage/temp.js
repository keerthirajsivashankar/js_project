// ==================================
// TO-DO LIST (WITH LOCALSTORAGE)
// ==================================

// 1. Select all the important elements
let taskInput = document.getElementById("task");
let addbuttontask = document.getElementById("addTask");
let todoList = document.getElementById("todoList");

// 2. === THE "SOURCE OF TRUTH" ===
// This array will hold all our tasks. The HTML will be built from this.
let tasks = [];

// 3. === THE RENDER FUNCTION ===
// This function "draws" our 'tasks' array onto the page.
function renderTasks() {
  // A. Start by clearing the entire <ul>
  todoList.innerHTML = "";

  // B. Loop through the 'tasks' array
  for (let i = 0; i < tasks.length; i++) {
    let currentTaskText = tasks[i];

    // C. Create the <li>
    let newli = document.createElement("li");
    newli.textContent = currentTaskText; // Use .textContent for security!

    // D. Create the delete button
    let deletebtn = document.createElement("button");
    deletebtn.textContent = " X";

    // E. Add the delete logic
    deletebtn.addEventListener("click", function () {
      // Remove the task from the 'tasks' ARRAY
      tasks.splice(i, 1); // 'splice(index, 1)' removes 1 item at 'index'

      // Re-save and re-draw
      saveTasks();
      renderTasks();
    });

    // F. Put it all together
    newli.appendChild(deletebtn);
    todoList.appendChild(newli);
  }
}

// 4. === THE ADD TASK FUNCTION ===
// This function runs when you click the "Add Task" button.
function addTask() {
  let taskText = taskInput.value;

  // Don't add empty tasks
  if (taskText === "") {
    return;
  }

  // A. Add the new task to our 'tasks' ARRAY
  tasks.push(taskText);

  // B. Save the new array
  saveTasks();

  // C. Re-draw the list
  renderTasks();

  // D. Clear the input field
  taskInput.value = "";
}

// 5. === THE SAVE FUNCTION ===
// This function saves the 'tasks' array to localStorage.
function saveTasks() {
  // Convert our 'tasks' array into a JSON string
  let tasksString = JSON.stringify(tasks);

  // Store that string in localStorage in a "drawer" named "myTasks"
  localStorage.setItem("myTasks", tasksString);
}

// 6. === THE LOAD FUNCTION ===
// This function runs once when the page first loads.
function loadTasks() {
  // Get the saved string from localStorage
  let savedTasksString = localStorage.getItem("myTasks");

  // Check if it's null (meaning it's the user's first visit)
  if (savedTasksString) {
    // If it's NOT null, parse it back into a real array
    tasks = JSON.parse(savedTasksString);
  }

  // Now, draw whatever is in our 'tasks' array!
  // (If it was a first visit, 'tasks' is just an empty array)
  renderTasks();
}

// 7. === THE FINAL SETUP ===
// A. Add the event listener for the button
addbuttontask.addEventListener("click", addTask);

// B. Load any saved tasks the moment the page opens
loadTasks();
