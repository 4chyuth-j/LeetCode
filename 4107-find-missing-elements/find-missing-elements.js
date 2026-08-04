/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    let set = new Set(nums);
    let min = Infinity, max = -Infinity;

    for (let n of nums) {
        if (n < min) min = n;
        if (n > max) max = n;
    }

    let res = [];

    while (min <= max) {
        if (!set.has(min)) {
            res.push(min)
        }
        min++;
    }

    return res;
};