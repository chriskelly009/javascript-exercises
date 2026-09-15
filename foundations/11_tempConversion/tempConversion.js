const convertToCelsius = function (temp) {
  let celsiusTemp = (temp - 32) * (5 / 9);
  celsiusTemp = Number(celsiusTemp.toFixed(1));

  return celsiusTemp;
  //   console.log(celsiusTemp);
};

const convertToFahrenheit = function (temp) {
  let farenheitTemp = temp * (9 / 5) + 32;
  farenheitTemp = Number(farenheitTemp.toFixed(1));
  //   console.log(farenheitTemp);
  return farenheitTemp;
};
// convertToCelsius(-100);
// convertToFahrenheit(-10);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
