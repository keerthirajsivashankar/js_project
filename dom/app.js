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
  let height = parsefloat(document.getElementById("h").value);
  let width = parsefloat(document.getElementById("w").value);
  let area = height * width;
  let result = document.getElementById("result");
  result.innerHTML = "The area is :" + area;
}

let calcButton = document.getElementById("calculate");
calcButton.addEventListener("click", calculateArea);
