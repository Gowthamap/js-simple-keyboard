let letter = "";
let enteredValue;

function myFunction(text) {
  text = document.getElementById(text).innerHTML;
  letter = letter + text;

  document.getElementById("text").innerHTML = letter;


}

function clearText() {
  document.getElementById("text").innerHTML = "";
  letter = "";
}

function enterFunc() {
  enteredValue = document.getElementById("text").innerHTML;
  document.getElementById("entered").innerHTML = enteredValue;
  letter = ""
}
