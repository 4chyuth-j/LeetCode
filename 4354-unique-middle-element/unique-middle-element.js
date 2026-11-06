/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function (nums) {
    const middle = Math.floor((nums.length) / 2);
    let left = middle - 1, right = middle + 1;

    while (left >= 0) {
        if (nums[left] === nums[middle] || nums[right] === nums[middle]) return false;
        left--;
        right++;
    }

    return true;
};