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

let display = document.getElementById("display");
let number1 = null, number2 = null, operator = null, result = null;

let operators = {
  addition: '+',
  subtraction: '-',
  multiplication: '*',
  division: '/',
  result: '='
};
let operators_set = new Set(Object.values(operators));

let button_result = document.getElementById("button-result");
button_result.addEventListener("click", () => {
  console.log('#####################')
  result = operate(operator, parseFloat(number1), parseFloat(number2));
  display.textContent = result;
  number1 = result;

  // debug
  console.log('#####################')
  console.log(`Number1: ${number1}`);
  console.log(`Number2: ${number2}`);
  console.log(`Operator: ${operator}`);
  console.log(`Result: ${result}`);
});

let button_ac = document.getElementById("button-ac");
button_ac.addEventListener("click", function() {
  number1 = null;
  number2 = null;
  operator = null;
  display.textContent = '0';
  
  // debug
  console.log('#####################')
  console.log(`Number1: ${number1}`);
  console.log(`Number2: ${number2}`);
  console.log(`Operator: ${operator}`);
  console.log(`Result: ${result}`);
});

let button_1 = document.getElementById("button-1");
button_1.addEventListener("click", function() {
  if (number1 == null || number1 == 0) {
    number1 = '1';
    display.textContent = number1;
  } else if (operator == null) {
    number1 = number1 + '1';
    display.textContent = number1;
  } else if (number2 == null || number2 == 0) {
    number2 = '1';
    display.textContent = number2;
  } else {
    number2 = number2 + '1';
    display.textContent = number2;
  };
  
  // debug
  console.log('#####################')
  console.log(`Number1: ${number1}`);
  console.log(`Number2: ${number2}`);
  console.log(`Operator: ${operator}`);
  console.log(`Result: ${result}`);
});

let button_2 = document.getElementById("button-2");
button_2.addEventListener("click", function() {
  if (number1 == null || number1 == 0) {
    number1 = '2';
    display.textContent = number1;
  } else if (operator == null) {
    number1 = number1 + '2';
    display.textContent = number1;
  } else if (number2 == null || number2 == 0) {
    number2 = '2';
    display.textContent = number2;
  } else {
    number2 = number2 + '2';
    display.textContent = number2;
  };
  
  // debug
  console.log('#####################')
  console.log(`Number1: ${number1}`);
  console.log(`Number2: ${number2}`);
  console.log(`Operator: ${operator}`);
  console.log(`Result: ${result}`);
});

let button_3 = document.getElementById("button-3");
button_3.addEventListener("click", function() {
  if (number1 == null || number1 == 0) {
    number1 = '3';
    display.textContent = number1;
  } else if (operator == null) {
    number1 = number1 + '3';
    display.textContent = number1;
  } else if (number2 == null || number2 == 0) {
    number2 = '3';
    display.textContent = number2;
  } else {
    number2 = number2 + '3';
    display.textContent = number2;
  };
  
  // debug
  console.log('#####################')
  console.log(`Number1: ${number1}`);
  console.log(`Number2: ${number2}`);
  console.log(`Operator: ${operator}`);
  console.log(`Result: ${result}`);
});

let button_4 = document.getElementById("button-4");
button_4.addEventListener("click", function() {
  if (number1 == null || number1 == 0) {
    number1 = '4';
    display.textContent = number1;
  } else if (operator == null) {
    number1 = number1 + '4';
    display.textContent = number1;
  } else if (number2 == null || number2 == 0) {
    number2 = '4';
    display.textContent = number2;
  } else {
    number2 = number2 + '4';
    display.textContent = number2;
  };
  
  // debug
  console.log('#####################')
  console.log(`Number1: ${number1}`);
  console.log(`Number2: ${number2}`);
  console.log(`Operator: ${operator}`);
  console.log(`Result: ${result}`);
});

let button_5 = document.getElementById("button-5");
button_5.addEventListener("click", function() {
  if (number1 == null || number1 == 0) {
    number1 = '5';
    display.textContent = number1;
  } else if (operator == null) {
    number1 = number1 + '5';
    display.textContent = number1;
  } else if (number2 == null || number2 == 0) {
    number2 = '5';
    display.textContent = number2;
  } else {
    number2 = number2 + '5';
    display.textContent = number2;
  };
  
  // debug
  console.log('#####################')
  console.log(`Number1: ${number1}`);
  console.log(`Number2: ${number2}`);
  console.log(`Operator: ${operator}`);
  console.log(`Result: ${result}`);
});

let button_6 = document.getElementById("button-6");
button_6.addEventListener("click", function() {
  if (number1 == null || number1 == 0) {
    number1 = '6';
    display.textContent = number1;
  } else if (operator == null) {
    number1 = number1 + '6';
    display.textContent = number1;
  } else if (number2 == null || number2 == 0) {
    number2 = '6';
    display.textContent = number2;
  } else {
    number2 = number2 + '6';
    display.textContent = number2;
  };
  
  // debug
  console.log('#####################')
  console.log(`Number1: ${number1}`);
  console.log(`Number2: ${number2}`);
  console.log(`Operator: ${operator}`);
  console.log(`Result: ${result}`);
});

let button_7 = document.getElementById("button-7");
button_7.addEventListener("click", function() {
  if (number1 == null || number1 == 0) {
    number1 = '7';
    display.textContent = number1;
  } else if (operator == null) {
    number1 = number1 + '7';
    display.textContent = number1;
  } else if (number2 == null || number2 == 0) {
    number2 = '7';
    display.textContent = number2;
  } else {
    number2 = number2 + '7';
    display.textContent = number2;
  };
  
  // debug
  console.log('#####################')
  console.log(`Number1: ${number1}`);
  console.log(`Number2: ${number2}`);
  console.log(`Operator: ${operator}`);
  console.log(`Result: ${result}`);
});

let button_8 = document.getElementById("button-8");
button_8.addEventListener("click", function() {
  if (number1 == null || number1 == 0) {
    number1 = '8';
    display.textContent = number1;
  } else if (operator == null) {
    number1 = number1 + '8';
    display.textContent = number1;
  } else if (number2 == null || number2 == 0) {
    number2 = '8';
    display.textContent = number2;
  } else {
    number2 = number2 + '8';
    display.textContent = number2;
  };

  // debug
  console.log('#####################')
  console.log(`Number1: ${number1}`);
  console.log(`Number2: ${number2}`);
  console.log(`Operator: ${operator}`);
  console.log(`Result: ${result}`);
});

let button_9 = document.getElementById("button-9");
button_9.addEventListener("click", function() {
  if (number1 == null || number1 == 0) {
    number1 = '9';
    display.textContent = number1;
  } else if (operator == null) {
    number1 = number1 + '9';
    display.textContent = number1;
  } else if (number2 == null || number2 == 0) {
    number2 = '9';
    display.textContent = number2;
  } else {
    number2 = number2 + '9';
    display.textContent = number2;
  };
  
  // debug
  console.log('#####################')
  console.log(`Number1: ${number1}`);
  console.log(`Number2: ${number2}`);
  console.log(`Operator: ${operator}`);
  console.log(`Result: ${result}`);
});

let button_0 = document.getElementById("button-0");
button_0.addEventListener("click", () => {
  if (operator == null) {
    if (number1 == null || number1 == 0) {
      number1 = 0
    } else {
      number1 = number1 + '0';
    }
    display.textContent = number1;
  } else {
    if (number2 == null || number2 == 0) {
      number2 = 0
    } else {
      number2 = number2 + '0';
    }
    display.textContent = number2;
  }

  // debug
  console.log('#####################')
  console.log(`Number1: ${number1}`);
  console.log(`Number2: ${number2}`);
  console.log(`Operator: ${operator}`);
  console.log(`Result: ${result}`);
});

let button_add = document.getElementById("button-add");
button_add.addEventListener("click", function() {
  if (number1 || number1 == 0) operator = operators.addition;
  number2 = null;
  
  // debug
  console.log('add #####################')
  console.log(`Number1: ${number1}`);
  console.log(`Number2: ${number2}`);
  console.log(`Operator: ${operator}`);
  console.log(`Result: ${result}`);
});

let button_subtract = document.getElementById("button-subtract");
button_subtract.addEventListener("click", function() {
  if (number1 || number1 == 0) operator = operators.subtraction;
  number2 = null;

  // debug
  console.log('#####################')
  console.log(`Number1: ${number1}`);
  console.log(`Number2: ${number2}`);
  console.log(`Operator: ${operator}`);
  console.log(`Result: ${result}`);
});

let button_multiply = document.getElementById("button-multiply");
button_multiply.addEventListener("click", function() {
  if (number1 || number1 == 0) operator = operators.multiplication;
  number2 = null;

  // debug
  console.log('#####################')
  console.log(`Number1: ${number1}`);
  console.log(`Number2: ${number2}`);
  console.log(`Operator: ${operator}`);
  console.log(`Result: ${result}`);
});

let button_divide = document.getElementById("button-divide");
button_divide.addEventListener("click", function() {
  if (number1 || number1 == 0) operator = operators.division;
  number2 = null;

  // debug
  console.log('#####################')
  console.log(`Number1: ${number1}`);
  console.log(`Number2: ${number2}`);
  console.log(`Operator: ${operator}`);
  console.log(`Result: ${result}`);
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