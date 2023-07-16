const sumAll = function(int1, int2) {
    if(int1 < 0 || int2 < 0 && typeof int1 != "number"  || typeof int2 != "number"){
        return "ERROR"
    }else if (int1 < int2) {
        let newnum = 0;
        for(let i = int1; i <= int2; i++){
            newnum+=i 
        }
        return newnum
    }else if(int1 > int2){
        let newnum = 0;
        for(let i = int1; i>= int2; i--){
            newnum+=i;
        }
        return newnum
    }
};


// Do not edit below this line
module.exports = sumAll;
