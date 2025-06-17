/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    function isPower(num){
        if(num<1) return false;
        if(num==1) return true;

        return isPower(num/3);
    }

    return isPower(n);
};