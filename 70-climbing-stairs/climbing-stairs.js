/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n+1).fill(-1);

    function totalWays(s){
        if(s==0) return 1;
        if(s<0) return 0;

        if(dp[s]!=-1){
            return dp[s];
        }

        const left = totalWays(s-1);
        dp[s-1] = left;


        const right = totalWays(s-2);
        dp[s-2] = right;

        return left + right;
    }

    return totalWays(n);
};