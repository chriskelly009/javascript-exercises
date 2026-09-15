const removeFromArray = function (arr, ...nums) {
  return arr.filter((item) => !nums.includes(item));
};
// Do not edit below this line
module.exports = removeFromArray;
