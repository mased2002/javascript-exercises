const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, curval) => {
		return total += curval
	}, 0)
};

const multiply = function(...args) {
	return args.reduce((total, curval) => {
    return total *= curval
  });
};

const power = function(a, b) {
  var result = 1
  for (let i = 0; i < b; i++){
     result *= a 
  }
  return result;
};

const factorial = function(a) {
    let result = 0 
    let factor = a;
    if(a === 0 || a === 1){
      result = 1
    }else {
	for (let i = a-1; i > 0; i--){
    factor *= i
     result = factor; 
  }
}
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
