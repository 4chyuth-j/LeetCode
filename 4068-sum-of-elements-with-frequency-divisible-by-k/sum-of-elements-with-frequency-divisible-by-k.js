/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
    let sum = 0;
    let map = new Map();
    for(let num of nums){
        map.set(num,(map.get(num) || 0)+1);
    }

    for(let [key,val] of map){
        if(val%k==0){
            sum+=key*val;
        }
    }

    return sum;
};