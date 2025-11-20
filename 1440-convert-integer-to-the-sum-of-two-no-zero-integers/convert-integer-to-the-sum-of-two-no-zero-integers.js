/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    let res = [];
    for (let i = n - 1; i >= 1; i--) {
        if(noZeroInteger(i) && noZeroInteger(n-i)){
            return [i,n-i];
        }

    }
};


function noZeroInteger(num) {
    while (num > 0) {
        if (num % 10 == 0) {
            return false;
        }
        num = Math.floor(num / 10);
    }

    return true;
}