/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */

var minimumSumSubarray = function (nums, l, r) {
    let minSum = Infinity;

    for (let size = l; size <= r; size++) {
        minSum = Math.min(minSum, getMinimumPositiveSum(nums, size));
    }

    return minSum === Infinity ? -1 : minSum;
};

function getMinimumPositiveSum(nums, size) {
    let windowSum = 0;
    let minSum = Infinity;

    // Calculate the first window
    for (let i = 0; i < size; i++) {
        windowSum += nums[i];
    }

    if (windowSum > 0) {
        minSum = windowSum;
    }

    // Slide the window
    for (let i = size; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - size];

        if (windowSum > 0) {
            minSum = Math.min(minSum, windowSum);
        }
    }

    return minSum;
}
