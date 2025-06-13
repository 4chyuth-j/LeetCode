/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    function poweTwo(num){
        if(num<=0) return false;
        if(num==1) return true;
        return poweTwo(num/2);
    }

    return poweTwo(n);
};