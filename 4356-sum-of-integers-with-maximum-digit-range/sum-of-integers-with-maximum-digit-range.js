/**
 * @param {number[]} nums
 * @return {number}
 */
var maxDigitRange = function (nums) {
    let sum = 0;
    let maxRange = -Infinity;
    for (let num of nums) {
        let range = getRange(num);
        if (range > maxRange) {
            maxRange = range;
            sum = num;
        } else if (range === maxRange) {
            sum += num;
        }
    }

    return sum;
};

function getRange(num) {
    let min = 9, max = 0;
    while (num > 0) {
        let digit = num % 10;

        min = Math.min(min, digit);
        max = Math.max(max, digit);

        num = Math.floor(num / 10);
    }

    return max - min;
}