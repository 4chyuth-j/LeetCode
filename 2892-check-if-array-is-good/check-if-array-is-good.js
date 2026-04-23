/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let max = -Infinity;
    for(let num of nums){
        max = Math.max(max,num);
    }

    let res = new Array(max+1).fill(0);

    for(let num of nums){
        res[num]++;
    }

    if(res[max]!=2) return false;

    for(let i=1; i<max; i++){
        if(res[i]!=1) return false;
    }

    return true;
};