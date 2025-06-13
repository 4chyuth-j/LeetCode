/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n == 0) return 1;
    if (x == 0) return 0;

    function pow(num, n) {
        if (n === 0) return 1;
        let half = pow(num, Math.floor(n / 2));
        if (n % 2 === 0) {
            return half * half;
        } else {
            return num * half * half;
        }
    }

    if (n > 0) {
        return pow(x, n);
    } else {
        return pow(1 / x, -n);
    }
};