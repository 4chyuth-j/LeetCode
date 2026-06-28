/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const max = 2147483647;
    const min = -2147483648;
    let res = Math.floor(Math.abs(dividend/divisor))
    if(dividend<0 && divisor<0){
        // return res;
    } else if(dividend<0 || divisor<0){
        res = -res;
        // return -res;
    } else {
        // return res;
    }

    if(res>max){
        return max;
    } else if(res<min){
        return min;
    }

    return res;
};