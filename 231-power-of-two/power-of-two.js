/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n==1) return true;

    if(n==0) return false;

    return checkPower(n);
};

function checkPower(num){
    if(num%2!=0){
        return false;
    }

    let newNum = Math.floor(num/2);
    if(newNum==1){
         return true
    } else {
        return checkPower(newNum);
    }
 
}