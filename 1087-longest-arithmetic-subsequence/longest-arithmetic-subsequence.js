/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
    let n = nums.length;
    if (n <= 2) return n;

    let dp = new Array(n);

    for (let i = 0; i < nums.length; i++) {
        dp[i] = new Map();
    }

    let maxLen = 2;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let diff = nums[j] - nums[i];
            if (dp[i].has(diff)) {
                dp[j].set(diff, dp[i].get(diff) + 1);
            } else {
                dp[j].set(diff,2);
            }

            maxLen = Math.max(maxLen,dp[j].get(diff));
        }
    }

    return maxLen;

};