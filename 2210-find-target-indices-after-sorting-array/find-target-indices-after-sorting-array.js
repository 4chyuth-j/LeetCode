/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let lessThan = 0 , equalTo = 0;
    for(let num of nums){
        if(num<target) lessThan++;
        if(num===target) equalTo++;
    }

    let res = [];
    
    for(let i=0; i<equalTo; i++){
        res.push(i+lessThan);
    }

    return res;
};