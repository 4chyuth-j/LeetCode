/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    function powerThree(num){
        if(num<=0) return false;
        if(num==1) return true;

        return powerThree(num/3);
    }

    return powerThree(n);
};