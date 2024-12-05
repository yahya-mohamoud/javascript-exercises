const add = function(num1, num2) {
	var add = num1 + num2;
  return add;
};
console.log(add(7, 8));
const subtract = function(num1, num2) {
	var substract = num1 - num2;
  return substract;
};
console.log(subtract(90, 8));

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

// console.log(sum(4, 5))

const multiply = function (array) {
  return array.reduce((product, current) => product * current)
};

// console.log(multiply(8, 9));

const power = function(num1, num2) {
	var power = num1 ** num2;
  return power;
};

console.log(power(2, 2));

const factorial = function(number) {
  if (number == 0 || number == 1) {
    return 1;
  }else{
    return number * factorial(number - 1);
  }
};

console.log(factorial(6));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
