/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function (num, sum) {
    if (sum < 0 || sum > 9 * num || sum < 1) {
        return "";
    }

    let result = "";

    for (let i = 0; i < num; i++) {
        const digit = Math.min(9, sum);
        result += digit;
        sum -= digit;
    }

    return sum === 0 ? result : "";
};

