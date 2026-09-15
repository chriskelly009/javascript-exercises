const sumAll = function (num1, num2) {
  let arr = "";
  let beginNum = 0;
  let endNum = 0;
  let sum = 0;
  if (!Number.isInteger(num1) || num1 < 0) {
    return "ERROR";
  } else if (!Number.isInteger(num2) || num2 < 0) {
    return "ERROR";
  }

  if (num1 > num2) {
    beginNum = num2;
    endNum = num1;
  } else {
    beginNum = num1;
    endNum = num2;
  }
  for (i = beginNum; i <= endNum; i++) {
    sum = sum + i;
  }
  return sum;
};

// sumAll(1, 4000);
// Do not edit below this line
module.exports = sumAll;
