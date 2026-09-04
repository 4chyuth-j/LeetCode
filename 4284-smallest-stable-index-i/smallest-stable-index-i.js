/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    let ind = -1;
    let minScore = Infinity;
    for(let i=0; i<nums.length; i++){
        const max = Math.max(...nums.slice(0,i+1));
        const min = Math.min(...nums.slice(i));
        const score = max-min;
        if(score<=k && ind==-1){
            ind = i;
            break;
        }
    }

    return ind;
};