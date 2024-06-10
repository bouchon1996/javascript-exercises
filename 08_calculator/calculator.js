const add = function(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
	let addition = a + b;
  return addition;
};

const subtract = function(a,b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
	let subtraction = a - b;
  return subtraction;
};

const sum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array){
  let multiplication = 1;
  for (let i = 0; i < array.length; i++) {
    multiplication = multiplication * array[i];
  }
  return multiplication;
};

const power = function(a,b) {
	let answer = 0;
  answer = a ** b;
  return answer;
};

const factorial = function(a) {
	let answer = 1;
  for (let i = 1; i <= a; i++) {
    answer = answer * i
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
