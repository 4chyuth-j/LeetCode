/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // let flag = 0;
    // for(let i=0; i<nums.length; i++){
    //     flag=0;
    //     for(let j=0; j<nums.length; j++){
    //         if(i==j){
    //             continue;
    //         }
    //         if(nums[i]==nums[j]){
    //             flag++;
    //         }
    //     }

    //     if(flag==0){
    //         return nums[i];
    //     }
    // }

    let result = {};
    for(let i=0; i<nums.length; i++){
        if(result[nums[i]]){
            result[nums[i]]++;
        } else {
            result[nums[i]]=1;
        }
    }

    for(let num in result){
        if(result[num] ==1) return Number(num);
    }
};