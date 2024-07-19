let number1 = 1, number2 = 2, operation = '+';

function operate(operator = '+', number1 = number1, number2 = number2){
  function add(number1, number2) {
    if (typeof(number1) === "number" && typeof(number2) === "number") return number1 + number2;
    return "error in =add= function";
  };
  function subtract(number1, number2) {
    if (typeof(number1) === "number" && typeof(number2) === "number") return number1 - number2;
    return "error in =subtract= function";
  };
  function multiply(number1, number2) {
    if (typeof(number1) === "number" && typeof(number2) === "number") return number1 * number2;
    return "error in =multiply= function";
  };
  function divide(number1, number2) {
    if (typeof(number1) === "number" && typeof(number2) === "number") return number1 / number2;
    return "error in =divide= function";
  };

  let result = 0;

  switch(operator) {
    case '+':
      result = add(number1, number2);
      break;
    case '-':
      result = subtract(number1, number2);
      break;
    case '*':
      result = multiply(number1, number2);
      break;
    case '/':
      result = divide(number1, number2);
      break;
    default:
      throw new Error('Unkown mathematical operator!');
  };
  return result;
};

let display = document.getElementById("display");

let button_1 = document.getElementById("button-1");
button_1.addEventListener("click", function() {
  display.textContent = "1";
});

let button_2 = document.getElementById("button-2");
button_2.addEventListener("click", function() {
  display.textContent = "2";
});

let button_3 = document.getElementById("button-3");
button_3.addEventListener("click", function() {
  display.textContent = "3";
});

let button_4 = document.getElementById("button-4");
button_4.addEventListener("click", function() {
  display.textContent = "4";
});

let button_5 = document.getElementById("button-5");
button_5.addEventListener("click", function() {
  display.textContent = "5";
});

let button_6 = document.getElementById("button-6");
button_6.addEventListener("click", function() {
  display.textContent = "6";
});

let button_7 = document.getElementById("button-7");
button_7.addEventListener("click", function() {
  display.textContent = "7";
});

let button_8 = document.getElementById("button-8");
button_8.addEventListener("click", function() {
  display.textContent = "8";
});

let button_9 = document.getElementById("button-9");
button_9.addEventListener("click", function() {
  display.textContent = "9";
});

let button_0 = document.getElementById("button-0");
button_0.addEventListener("click", function() {
  display.textContent = "0";
});

let button_add = document.getElementById("button-add");
button_add.addEventListener("click", function() {
  display.textContent = "+";
});

let button_subtract = document.getElementById("button-subtract");
button_subtract.addEventListener("click", function() {
  display.textContent = "-";
});

let button_multiply = document.getElementById("button-multiply");
button_multiply.addEventListener("click", function() {
  display.textContent = "*";
});

let button_divide = document.getElementById("button-divide");
button_divide.addEventListener("click", function() {
  display.textContent = "/";
});

let button_result = document.getElementById("button-result");button_result.addEventListener("click", function() {
  display.textContent = "=";
});

