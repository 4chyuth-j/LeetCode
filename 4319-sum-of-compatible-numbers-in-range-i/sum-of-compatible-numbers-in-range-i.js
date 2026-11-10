/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumOfGoodIntegers = function(n, k) {
    let sum = 0
    let x = Math.max(1,n-k);
    while(x<=n+k){
        let res = n & x;
        if(Math.abs(n-x)<=k && res ===0){
            sum+=x;
        }
        x++;
    }

    return sum;
};