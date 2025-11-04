/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0;
    let num = Math.abs(x);

    while (num > 0) {
        res = res * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    if (x < 0) res = -res;

    // correct 32-bit signed range
    if (res < -2147483648 || res > 2147483647) return 0;
    return res;
};


