console.log("Working script");

function innerhtmlfunction() {
  text = document.getElementById("inputtext").value;
  document.getElementById("outputdiv").innerHTML = "<h1> " + text + "</h1>";
}

function innertextfunction() {
  text1 = document.getElementById("inputtext1").value;
  document.getElementById("outputdiv1").innerText = text1;
}

function documentwritefunction() {
  text2 = document.getElementById("inputtext2").value;
  document.write(
    "it rewrites the entire page so if screen became balck just reload the page here is your text : " +
      text2
  );
}

function alertfunction() {
  text3 = document.getElementById("inputtext3").value;
  alert(text3);
}

function consolelogfunction() {
  text4 = document.getElementById("inputtext4").value;
  console.log(text4);
}

function printfunction() {
  text5 = document.getElementById("inputtext5").value;
  document.getElementById("outputdiv").innerHTML =
    "<h1> you will get the printable format of the page </h1>";
  window.print();
}
