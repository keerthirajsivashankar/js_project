console.log("File runing");
let mytask = document.getElementById("mytasks");
let task = document.getElementById("taskInput");
let taskaddbtn = document.getElementById("taskaddbtn");

//render task

let tasks = [];

function renderTasks() {
  mytask.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let curr = tasks[i];

    let li = document.createElement("li");
    li.innerText = curr;

    let delbtn = document.createElement("button");
    delbtn.innerText = " X";

    delbtn.addEventListener("click", function () {
      tasks.splice(i, 1);

      renderTasks();
      saveTasks();
    });

    li.appendChild(delbtn);
    mytask.appendChild(li);
  }
}

function addTask() {
  let taskText = task.value;

  if (taskText === "") {
    return;
  }

  tasks.push(taskText);
  saveTasks();
  renderTasks();
  task.value = "";
}

function saveTasks() {
  let tasksJson = JSON.stringify(tasks);
  localStorage.setItem("myTasks", tasksJson);
}

function loadTasks() {
  let taskstring = localStorage.getItem("myTasks");

  if (taskstring) {
    tasks = JSON.parse(taskstring);
  }

  renderTasks();
}

taskaddbtn.addEventListener("click", addTask);
loadTasks();
