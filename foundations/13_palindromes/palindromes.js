const palindromes = function (string) {
  const cleaned = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  return cleaned === cleaned.split("").reverse().join("");
};
// palindromes("racecar");
// Do not edit below this line
module.exports = palindromes;
