const convertToCelsius = function(farn) {
  let times = 5/9
  return Math.round(((farn - 32) * times) * 10) /10 
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
