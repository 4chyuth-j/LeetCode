/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    let leftSum = nums[0];
    let rightSum = 0;
    let n = nums.length;
    let count = 0;

    for (let i = 1; i < nums.length; i++) {
        rightSum += nums[i];
    }

    if (Math.abs(leftSum + rightSum) % 2 === 0) {
        count++;
    }

    let i = 1;
    while (i < n - 1) {
        leftSum += nums[i];
        rightSum -= nums[i];
        if (Math.abs(leftSum + rightSum) % 2 === 0) {
            count++;
        }

        i++;

    }

    return count;

};