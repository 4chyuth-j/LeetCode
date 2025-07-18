/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let maxDigit = '';
    for(let i=0; i<number.length; i++){
        if(number[i]==digit){
            let temp = number.substring(0,i) + number.substring(i+1);
            if(maxDigit<temp){
                maxDigit = temp;
            }
        }
    }

    return maxDigit;
    
};