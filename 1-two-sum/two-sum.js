/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // let arr=[];
    // outerloop: for(let i=0; i<nums.length-1; i++){

    //     for(let j=i+1; j<nums.length; j++){

    //         if(nums[i]+nums[j]==target){
               
    //            arr=[i,j];

    //            break outerloop;

    //         }

    //     }
    // }
    //    return arr;

    let testMap = new Map();
    for(let i=0; i<nums.length; i++){
        if(testMap.has(target-nums[i])){
            return [testMap.get(target-nums[i]),i];
        } else {
            testMap.set(nums[i],i);
        }
    }
    
};