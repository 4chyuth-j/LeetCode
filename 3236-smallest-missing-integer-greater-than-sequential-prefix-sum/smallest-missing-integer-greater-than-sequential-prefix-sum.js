/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {

    let temp = nums[0];
    let array = [temp];

    let i = 1;

    for( ; i<nums.length; i++){
        if(nums[i]==temp+1){
            array.push(nums[i]);
            temp = nums[i];
        } else {
            break;
        }
    }

    let sum = array.reduce((acc,curr)=>acc+curr,0);

    let set = new Set(nums);

    while(set.has(sum)){
        sum++;
    }


    return sum;


};