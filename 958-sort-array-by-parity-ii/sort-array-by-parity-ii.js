/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
   

    let oddArr = [];
    let evenArr = [];
    let result = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2==0){
            evenArr.push(nums[i]);
        } else {
            oddArr.push(nums[i]);
        }
    }

    let oddIndex=0,evenIndex=0;

    for(let i=0; i<nums.length; i++){

        if(i==0 || i%2==0){
            result.push(evenArr[evenIndex]);
            evenIndex++;
        } else {
            result.push(oddArr[oddIndex]);
            oddIndex++;
        }

    }

    return result;

};