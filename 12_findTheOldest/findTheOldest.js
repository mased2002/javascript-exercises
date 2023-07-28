const findTheOldest = function(arr) {
    const newarr = arr.map((el) => {
        if(el.yearOfDeath === undefined){
            el.yearOfDeath = (new Date()).getFullYear();
        }else if (el.yearOfBirth === undefined){
            el.yearOfBirth ===(new Date()).getFullYear();
        }
        return (el.yearOfDeath - el.yearOfBirth)
    })
    console.table(newarr)
    let result = 0;
    
    for(let i = 0; i < newarr.length; i++ ){
        // console.log("yasssss alors on danse" + newarr[result])
        // console.log("this is the newarr:" + newarr[i])
        if (newarr[i] > newarr[result]){
            // console.log(newarr[i])
            result = i;
            // console.log("this is the result :" + result)
        }
    }
    return arr[result];
};

// Do not edit below this line
module.exports = findTheOldest;
