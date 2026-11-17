/**
 * @param {number[]} nums
 * @return {number}
 */
var maxDigitRange = function(nums) {
    let digRange = [];
    let max = -Infinity;
    for(let num of nums){
        let output = getRange(num);
        max = Math.max(max,output);
        digRange.push(output);
    }

    let sum = 0;
    for(let i=0; i<nums.length; i++){
        if(digRange[i]===max){
            sum+=nums[i];
        }
    }

    return sum;
};

function getRange(num){
    let min = Infinity, max = -Infinity;
    while(num>0){
        let dig = num%10;
        if(dig>max){
            max = dig;
        } 

         if(dig<min){
            min = dig;
        }

        num = Math.floor(num/10);
    }

    return max-min;
}