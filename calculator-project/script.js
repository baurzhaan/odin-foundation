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

console.log(number1);
console.log(number2);
console.log(operation);

console.log(operate(operation, number1, number2));