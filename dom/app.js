let greeetingsdiv = document.getElementById("greetings");
greeetingsdiv.innerHTML = "Hello, welcome to our website!";

let dynamicDiv = document.getElementById("clickme");
let button = document.getElementById("btn");

function changeContent() {
  dynamicDiv.innerHTML = "You clicked the button!";
}
button.addEventListener("click", changeContent);

// calculate area

function calculateArea() {
  let height = parseFloat(document.getElementById("h").value);
  let width = parseFloat(document.getElementById("w").value);
  let area = height * width;
  let result = document.getElementById("result");
  result.innerHTML = "The area is :" + area;
}

let calcButton = document.getElementById("calculate");
calcButton.addEventListener("click", calculateArea);

// create shopping list
console.log("Creating shopping list...");
let shoppinglist = ["milk", "eggs", "bread", "butter", "cheese"];

let parent = document.getElementById("shopping");

let n = shoppinglist.length;

for (let i = 0; i < n; i++) {
  let curr = shoppinglist[i];

  let newele = document.createElement("li");
  newele.innerHTML = curr;
  parent.appendChild(newele);
}

// to-do list functionality
function addTask() {
  let deletebtn = document.createElement("button");
  deletebtn.innerHTML = " X";
  let taskInput = document.getElementById("task").value;
  let newli = document.createElement("li");
  newli.innerHTML = taskInput;
  newli.appendChild(deletebtn);
  deletebtn.addEventListener("click", function () {
    todoList.removeChild(newli);
  });
  todoList.appendChild(newli);
  document.getElementById("task").value = "";
}
let todoList = document.getElementById("todoList");
let addbuttontask = document.getElementById("addTask");
addbuttontask.addEventListener("click", addTask);
