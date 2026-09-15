const leapYears = function (year) {
  if (year < 100 && year % 4 == 0) {
    // console.log("leapyear");
    return true;
  } else if (year % 4 == 0 && (year + 400) % 400 == 0) {
    // console.log("leapyear");
    return true;
  } else if (year % 4 == 0 && !(year % 100 == 0)) {
    // console.log("leapyear");
    return true;
  } else {
    return false;
  }
};
// leapYears(700);
// Do not edit below this line
module.exports = leapYears;
