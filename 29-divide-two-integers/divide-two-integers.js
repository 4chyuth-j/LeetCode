/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const max = 2147483647;
    const min = -2147483648;
    const isSigned = Math.sign(dividend)!=Math.sign(divisor);
    let res = Math.floor(Math.abs(dividend/divisor))
    if(isSigned){
        res = -res;
    }

    if(res>max){
        return max;
    } else if(res<min){
        return min;
    }

    return res;
};