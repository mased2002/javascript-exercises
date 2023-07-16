const repeatString = function(string, num) {
    let results = '';
            if (num < 0 ){
             results = "ERROR"
        }else if (num === 0 || string == "") {
            results = '';
        }else {
            for (let i  = 0; i < num; i++){

           results += string
        }
    }
    return results
};

// Do not edit below this line
module.exports = repeatString;
