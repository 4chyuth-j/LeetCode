/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let elemSum = 0;
    let digitSum = 0;
    for (let item of nums) {
        elemSum += item;
    }
    for (let i = 0; i < nums.length; i++) {
        let dummy = String(nums[i]);
         dummy = dummy.split('');
         
        for (let j = 0; j < dummy.length; j++){
            digitSum+=Number(dummy[j]);
        }
    }
    console.log(elemSum);
    console.log(digitSum);
    if(elemSum>digitSum){
        return elemSum-digitSum;
    } else{
        return digitSum - elemSum;
    }
};