const reverseString = function(string) {
    const newstr = string.split('')
    let result = [];
    for (let i = newstr.length -1; i >= 0; i--){
        result.push(newstr[i])
    }
    return result.join("")
};

// Do not edit below this line
module.exports = reverseString;
