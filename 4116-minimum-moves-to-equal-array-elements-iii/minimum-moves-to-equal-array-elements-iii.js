/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const max = Math.max(...nums);
    let steps = 0;
    
    for(let num of nums){
        steps+=(max-num);
    }

    return steps
};