const convertToCelsius = function(fahrenheit) {
  let times = 5/9
  return Math.round(((fahrenheit - 32) * times) * 10) /10 
};

const convertToFahrenheit = function(celcius) {
  return Math.round(((celcius * 9/5) + 32) * 10) /10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
