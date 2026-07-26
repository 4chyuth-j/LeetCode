/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let num1 = -Infinity;
    let num2 = -Infinity;
    let num3 = -Infinity;
    let min1 = Infinity;
    let min2 = Infinity;

    for(let num of nums){
        if(num>=num1){
            num3 = num2;
            num2 = num1;
            num1 = num;
        } else if(num>=num2){
            num3 = num2;
            num2 = num;
        } else if(num>num3){
            num3 = num;
        }

        if(num<=min1){
            min2 = min1;
            min1 = num;
        } else if(num<min2){
            min2 = num;
        }

    }

    return Math.max(num1*num2*num3,min1*min2*num1);
};