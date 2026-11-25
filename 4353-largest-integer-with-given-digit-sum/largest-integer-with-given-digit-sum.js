/**
 * @param {number} n
 * @param {number} s
 * @return {number}
 */
var largestInteger = function (n, s) {
    if (n * 9 < s) return -1;

    if (s == 0) return 0;

    let number = 0;

    while (n > 0) {
        let dig = Math.min(9, s);
        number = number * 10 + dig;
        s -= dig;
        n--;
    }

    return number;
};