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

console.log(add(1,2));
console.log(add("a", "b"));

console.log(subtract(1,2));
console.log(subtract("a", "b"));

console.log(multiply(1,2));
console.log(multiply("a", "b"));

console.log(divide(1,2));
console.log(divide("a", "b"));