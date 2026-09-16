const fibonacci = function (num) {
  arr = [];
  if (typeof num === "string") {
    num = Number(num);
  }
  if (num < 0) {
    return "OOPS";
  } else if (num === 0) {
    return 0;
  }
  arr = [1, 1];
  for (i = 0; i < num - 1; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }
  return arr[num - 1];
  //   console.log(arr);
  //   return arr[num - 1];
};

console.log(fibonacci(-25));

// Do not edit below this line
module.exports = fibonacci;
