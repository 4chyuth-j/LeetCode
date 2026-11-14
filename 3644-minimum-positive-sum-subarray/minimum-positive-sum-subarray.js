/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (nums, l, r) {
    let minSum = Infinity;
    for (let i = l; i <= r; i++) {
        let val = getSum(nums, i);
        if(val!=Infinity){
            minSum = Math.min(minSum,val);
        }
    }

    return minSum==Infinity? -1 : minSum;
};

function getSum(nums, size) {
    let sum = Infinity;
    let rangeSum = 0;
    for (let i = 0; i < size; i++) {
        rangeSum += nums[i];
    }

    if (rangeSum > 0 && rangeSum < sum) {
        sum = rangeSum;
    }

    for (let i = size; i < nums.length; i++) {
        rangeSum += nums[i];
        rangeSum -= nums[i - size];
        if (rangeSum > 0 && rangeSum < sum) {
            sum = rangeSum;
        }
    }

    return sum;
}