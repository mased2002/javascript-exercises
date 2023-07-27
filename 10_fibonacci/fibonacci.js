const fibonacci = function(idx) {
    if(idx ==0 ){
        return 0
    }
    if(idx == 1){
        return 1
    }
    if(idx < 0){
        return "OOPS"
    }
let curNum = 1
let lastNum = 1
    for (let i = 2; i < idx; i++){
        let fibo = lastNum + curNum
        lastNum = curNum
        curNum = fibo
        
    }
    return curNum
};

// Do not edit below this line
module.exports = fibonacci;
