// let number1 = 1, number2 = 2, operation = '+';

function operate(operator, number1, number2){
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

let number1 = null, number2 = null, operator = null;

let display = document.getElementById("display");

let button_1 = document.getElementById("button-1");
button_1.addEventListener("click", function() {
  (number1 === null) ? number1 = 1 : number2 = 1;
  console.log(`number_1 = ${number1}`);
  console.log(`number_2 = ${number2}`);
  display.textContent = "1";
});

let button_2 = document.getElementById("button-2");
button_2.addEventListener("click", function() {
  number1 = 2;
  console.log(`number_1 = ${number1}`);
  display.textContent = number1;
});

let button_3 = document.getElementById("button-3");
button_3.addEventListener("click", function() {
  number1 = 3;
  console.log(`number_1 = ${number1}`);
  display.textContent = number1;
});

let button_4 = document.getElementById("button-4");
button_4.addEventListener("click", function() {
  number1 = 4;
  console.log(`number_1 = ${number1}`);
  display.textContent = number1;
});

let button_5 = document.getElementById("button-5");
button_5.addEventListener("click", function() {
  number1 = 5;
  console.log(`number_1 = ${number1}`);
  display.textContent = number1;
});

let button_6 = document.getElementById("button-6");
button_6.addEventListener("click", function() {
  number1 = 6;
  console.log(`number_1 = ${number1}`);
  display.textContent = number1;
});

let button_7 = document.getElementById("button-7");
button_7.addEventListener("click", function() {
  number1 = 7;
  console.log(`number_1 = ${number1}`);
  display.textContent = number1;
});

let button_8 = document.getElementById("button-8");
button_8.addEventListener("click", function() {
  number1 = 8;
  console.log(`number_1 = ${number1}`);
  display.textContent = number1;
});

let button_9 = document.getElementById("button-9");
button_9.addEventListener("click", function() {
  number1 = 9;
  console.log(`number_1 = ${number1}`);
  display.textContent = number1;
});

let button_0 = document.getElementById("button-0");
button_0.addEventListener("click", function() {
  number1 = 0;
  console.log(`number_1 = ${number1}`);
  display.textContent = number1;
});

let button_add = document.getElementById("button-add");
button_add.addEventListener("click", function() {
  operator = "+";
  console.log(`operator = ${operator}`);
  display.textContent = operator;
});

let button_subtract = document.getElementById("button-subtract");
button_subtract.addEventListener("click", function() {
  operator = "-";
  console.log(`operator = ${operator}`);
  display.textContent = operator;
});

let button_multiply = document.getElementById("button-multiply");
button_multiply.addEventListener("click", function() {
  operator = "*";
  console.log(`operator = ${operator}`);
  display.textContent = operator;
});

let button_divide = document.getElementById("button-divide");
button_divide.addEventListener("click", function() {
  operator = "/";
  console.log(`operator = ${operator}`);
  display.textContent = operator;
});

let button_result = document.getElementById("button-result");
button_result.addEventListener("click", function() {
  operator = "=";
  console.log(`operator = ${operator}`);
  display.textContent = operator;
});

let button_ac = document.getElementById("button-ac");
button_ac.addEventListener("click", function() {
  operator = "ac";
  console.log(`operator = ${operator}`);
  display.textContent = "";
});

let button_negate = document.getElementById("button-negate");
button_negate.addEventListener("click", function() {
  operator = "+/-";
  console.log(`operator = ${operator}`);
  display.textContent = operator;
});

let button_percent = document.getElementById("button-percent");
button_percent.addEventListener("click", function() {
  operator = "%";
  console.log(`operator = ${operator}`);
  display.textContent = operator;
});

let button_dot = document.getElementById("button-dot");
button_dot.addEventListener("click", function() {
  operator = ".";
  console.log(`operator = ${operator}`);
  display.textContent = operator;
});