/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max = [-Infinity,-Infinity,-Infinity];

    for(let num of nums){
        
        if(max.includes(num)) continue;

        if(max[0]< num){
            max[2] = max[1];
            max[1] = max[0];
            max[0] = num;
        } else if(max[0]>num && max[1]<num){
            max[2] = max[1];
            max[1] = num;
        } else if(max[1]>num && max[2]<num){
            max[2] = num;
        }
    }

    return max[2]!==-Infinity?max[2]:max[0];
};