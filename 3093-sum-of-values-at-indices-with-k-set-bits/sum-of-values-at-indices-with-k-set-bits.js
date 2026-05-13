/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        if(k===countOne(i.toString(2))){
            sum+=nums[i];
        }
    }
    
    function countOne(num){
        let count = 0;
        for(let c of num){
            if(c==="1") count++;
        }

        return count;
    }

    return sum;


};