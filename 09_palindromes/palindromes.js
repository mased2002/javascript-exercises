const palindromes = function (str) {
        
            var punctRemoved = removepunct(str)
            const checkPalindromes = []
            punctRemoved = punctRemoved.split('')
            for(let i = punctRemoved.length -1; i >= 0; i--){
                checkPalindromes.push(punctRemoved[i])
            }
            console.log(checkPalindromes)
            console.log(punctRemoved)
            if(checkPalindromes.join('') === punctRemoved.join('')){
                return true;
            }else{
                return false;
            }
            
            function removepunct(s){
                const lettersNums = '0123456789abcdefghijklmnopqrstuvwxyz'
                const alphabetOnly  = []
            let result = null
                for (letter of s.toLowerCase()){
                    if(lettersNums.includes(letter)){
                     alphabetOnly.push(letter)
                    }
                }
                result = alphabetOnly.join('')
                return result;
            }
};

// Do not edit below this line
module.exports = palindromes;
