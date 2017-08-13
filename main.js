//document.getElementById("one").innerText = "hello";

//document.getElementById("one").addEventListener("click", funtion name)

// document.getElementById("one").addEventListener("click", function () {})
var input1 = "";
var operation = "";
var input2 = "";
var firstInput = true;
var equation = "";

document.getElementById("solutionBox").innerText = equation;
console.log(equation);
// the var are for placing variables in specific palces, the flag is a break in the input1 and input2 variable boxes.
document.getElementById("clear").addEventListener("click", clr);

function clr () {
  console.log("C");
  equation = "";
  input1 = "";
  operation = "";
  input2 = "";
  firstInput = true;
  document.getElementById("solutionBox").innerText = equation;
}

document.getElementById("seven").addEventListener("click", num7);


function num7 () {
  if (firstInput === true) {
    input1 += "7";
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input1: " + input1);
    console.log("after equation: " + equation);

  }
  else {
    input2 += "7"
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("eight").addEventListener("click", num8);

function num8 () {
  if (firstInput === true) {
    input1 += "8";
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "8"
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}
document.getElementById("nine").addEventListener("click", num9);

function num9 () {
  if (firstInput === true) {
    input1 += "9";
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input1: " + input1);
    console.log("equation: " + equation);
  }
  else {
    input2 += "9"
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("four").addEventListener("click", num4);

function num4 () {
  if (firstInput === true) {
    input1 += "4";
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "4"
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("five").addEventListener("click", num5);

function num5 () {
  if (firstInput === true) {
    input1 += "5";
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "5"
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("six").addEventListener("click", num6);

function num6 () {
  if (firstInput === true) {
    input1 += "6";
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "6"
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("one").addEventListener("click", num1);

function num1 () {
  if (firstInput === true) {
    input1 += "1";
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "1"
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("two").addEventListener("click", num2);

function num2 () {
  if (firstInput === true) {
    input1 += "2";
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "2"
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("three").addEventListener("click", num3);

function num3 () {
  if (firstInput === true) {
    input1 += "3";
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "3"
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("zero").addEventListener("click", num0);

function num0 () {
  if (firstInput === true) {
    input1 += "0";
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "0"
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("division").addEventListener("click", division);

function division () {
  firstInput = false;
  operation = "/"
  equation = input1 + operation + input2;
  document.getElementById("solutionBox").innerText = equation;
  console.log(equation);
  console.log(operation);
}

document.getElementById("multiply").addEventListener("click", multiply);

function multiply () {
  firstInput = false;
  operation = "X"
  equation = input1 + operation + input2;
  document.getElementById("solutionBox").innerText = equation;
  console.log(equation);
}

document.getElementById("subtraction").addEventListener("click", subtraction);

function subtraction () {
  firstInput = false;
  operation = "-"
  equation = input1 + operation + input2;
  document.getElementById("solutionBox").innerText = equation;
  console.log(equation);
}
document.getElementById("addition").addEventListener("click", addition);

function addition () {
  firstInput = false;
  operation = "+"
  equation = input1 + operation + input2;
  document.getElementById("solutionBox").innerText = equation;
  console.log(equation);

}
document.getElementById("decimal").addEventListener("click", dot);

function dot () {
  if (firstInput === true) {
    input1 += ".";
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "."
    equation = input1 + operation + input2;
    document.getElementById("solutionBox").innerText = equation;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("equals").addEventListener("click", solve);
function solve () {
  if (operation === "/") {
    equation = eval("input1 / input2");
    document.getElementById("solutionBox").innerText = equation;
  }
  else if (operation === "X") {
    equation = eval("input1 * input2");
    document.getElementById("solutionBox").innerText = equation;
  }
  else if (operation === "+") {
    input1n = Number(input1)
    input2n = Number(input1)
    equation = eval("input1n + input2n");
    document.getElementById("solutionBox").innerText = equation;
  }
  else if (operation === "-") {
    equation = eval("input1 - input2");
    document.getElementById("solutionBox").innerText = equation;
  }
}
