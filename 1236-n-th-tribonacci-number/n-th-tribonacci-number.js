/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const ways = [];
    ways[0] = 0;
    ways[1] = 1;
    ways[2] = 1;

    for(let i=3; i<=n; i++){
        ways[i] = ways[i-1]+ways[i-2]+ways[i-3];
    }

    return ways[n];
};