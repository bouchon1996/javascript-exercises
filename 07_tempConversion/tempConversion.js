const convertToCelsius = function(fTemp) {
  let cTemp = (fTemp - 32) * (5/9);
  let rounded = Math.round(cTemp * 10) / 10
  return rounded;
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = (cTemp * (9/5)) + 32;
  let rounded = Math.round(fTemp * 10) / 10
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
