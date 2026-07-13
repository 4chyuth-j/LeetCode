/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
    let row = nums.length, col = nums[0].length;
    let maxNum = -Infinity;
    for (let i = 0; i < row; i++) {
        let num = nums[i][i];
        if (isPrime(num)) {
            maxNum = Math.max(maxNum, num);
        }
    }

    for (let i = row - 1; i >= 0; i--) {
        let num = nums[row - 1 - i][i];
        if (isPrime(num)) {
            maxNum = Math.max(maxNum, num);
        }
    }

    return maxNum === -Infinity ? 0 : maxNum;
};

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }

    return true;
}