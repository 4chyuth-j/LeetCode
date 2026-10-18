/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const memo = {};
    function calcTribonacci(n){
        if(memo[n]) return memo[n];
        if(n==0) return 0;
        if(n<=2) return 1;
        const result = calcTribonacci(n-1)+calcTribonacci(n-2)+calcTribonacci(n-3);
        memo[n] = result;
        return result;
    }

    return calcTribonacci(n);
};