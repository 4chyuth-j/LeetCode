/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let large = nums[0];
    let small = nums[0];
    for(let i=0; i<nums.length; i++){  
        small = Math.min(small,nums[i]);
        large = Math.max(large,nums[i]);
    }

    return getGCD(large,small);
};

function getGCD(num1,num2){
    while(num2!=0){
        let rem = num1%num2;
        num1 = num2;
        num2 = rem;
    }

    return num1;
}