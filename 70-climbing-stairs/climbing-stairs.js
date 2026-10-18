/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
    const memo = {};
    function getWays(n) {
        if(memo[n]) return memo[n];
        if (n == 1) return 1;
        if (n == 2) return 2;
        const result =  getWays(n - 1) + getWays(n - 2);

        memo[n] = result;

        return result;
    }

    return getWays(n);
};