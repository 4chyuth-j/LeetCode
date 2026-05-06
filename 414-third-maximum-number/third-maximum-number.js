/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max = [-Infinity,-Infinity,-Infinity];

    for(let num of nums){
        console.log("test1")
        if(max.includes(num)) continue;
        console.log("test2")

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