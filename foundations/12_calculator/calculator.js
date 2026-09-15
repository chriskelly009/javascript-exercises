const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (...arr) {
  let total = 1;
  const newArray = arr;
  const sumArray = newArray.map((item) => {
    total = total + item;
  });
  return total - 1;
};

const multiply = function (...arr) {
  let total = 1;
  const multiArray = arr.map((num) => {
    total = total * num;
  });
  return total;
};

const power = function (b, e) {
  return b ** e;
};

const factorial = function (num) {
  let numFactorial = num;
  if (num === 0 || num === 1) {
    return 1;
  } else {
  }
  // let total = num * num - 1;
  let total = 1;
  for (i = numFactorial; i > 1; i--) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
