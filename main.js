//document.getElementById("one").innerText = "hello";

//document.getElementById("one").addEventListener("click", funtion name)

// document.getElementById("one").addEventListener("click", function () {})
var input1 = "";
var operation = "";
var input2 = "";
var firstInput = true;
var equation = input1 + operation + input2;
// var firstInput = true;

document.getElementById("solutionBox").innerText = equation;

// the var are for placing variables in specific palces, the flag is a break in the input1 and input2 variable boxes.
document.getElementById("clear").addEventListener("click", clr);

function clr () {
  console.log("C");
  // document.getElementById("solutionBox").innerText += "";
  equation = "";
}

document.getElementById("seven").addEventListener("click", num7);


function num7 () {
  if (firstInput === true) {
    input1 += "7";
    // equation = input1;
    console.log("input1: " + input1);
    console.log("equation: " + equation);
  }
  else {
    input2 += "7"
    // equation += input2;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("eight").addEventListener("click", num8);

function num8 () {
  if (firstInput === true) {
    input1 += "8";
    equation = input1;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "8"
    equation += input2;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}
document.getElementById("nine").addEventListener("click", num9);

function num9 () {
  if (firstInput === true) {
    input1 += "9";
    equation = input1;
    console.log("input1: " + input1);
    console.log("equation: " + equation);
  }
  else {
    input2 += "9"
    equation += input2;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("four").addEventListener("click", num4);

function num4 () {
  if (firstInput === true) {
    input1 += "4";
    equation = input1;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "4"
    equation += input2;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("five").addEventListener("click", num5);

function num5 () {
  if (firstInput === true) {
    input1 += "5";
    equation = input1;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "5"
    equation += input2;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("six").addEventListener("click", num6);

function num6 () {
  if (firstInput === true) {
    input1 += "6";
    equation = input1;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "6"
    equation += input2;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("one").addEventListener("click", num1);

function num1 () {
  if (firstInput === true) {
    input1 += "1";
    equation = input1;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "1"
    equation += input2;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("two").addEventListener("click", num2);

function num2 () {
  if (firstInput === true) {
    input1 += "2";
    equation = input1;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "2"
    equation += input2;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("three").addEventListener("click", num3);

function num3 () {
  if (firstInput === true) {
    input1 += "3";
    equation = input1;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "3"
    equation += input2;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("zero").addEventListener("click", num0);

function num0 () {
  if (firstInput === true) {
    input1 += "0";
    equation = input1;
    console.log("input1: " + input1);
    console.log("equation: " + equation);

  }
  else {
    input2 += "0"
    equation += input2;
    console.log("input2: " + input2);
    console.log("equation: " + equation);
  }
}

document.getElementById("division").addEventListener("click", division);

function division () {
  firstInput = false;
  equation += "/";
  console.log(equation);
}

document.getElementById("multiply").addEventListener("click", multiply);

function multiply () {
  firstInput = false;
  equation += "X";
  console.log(equation);
}

document.getElementById("subtraction").addEventListener("click", subtraction);

function subtraction () {
  firstInput = false;
  equation += "-";
  console.log(equation);
}
document.getElementById("addition").addEventListener("click", addition);

function addition () {
  firstInput = false;
  equation += "+";
  console.log(equation);
}

function solve (input1, operation, input2) {
  if (operation === "/") {
    eval("input1 / input2")
  }
  else if (operation === "*") {
    return input1 * input2
  }
  else if (operation === "+") {
    return input1 + input2
  }
  else if (operation === "-") {
  return input1 - input2
  }
}
