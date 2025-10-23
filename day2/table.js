console.log("This is day 2, table.js");
function generateTable() {
  let count = document.getElementById("count").value;
  let number = document.getElementById("number").value;

  for (let i = 0; i <= count; i++) {
    let newrow = document.createElement("div");
    newrow.classList.add("row");
    newrow.innerText = `${number} x ${i} = ${number * i}`;
    document.getElementById("table-output").appendChild(newrow);
  }
}
