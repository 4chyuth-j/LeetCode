/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let n = nums.length;
    if (n == 0) return 0;

    let set = new Set(nums);
    let longestStreak = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let count = 1
            while (set.has(num + 1)) {
                count++;
                num = num + 1;
            }

            longestStreak = Math.max(longestStreak, count);
        }
    }

    return longestStreak;

};