/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function(nums) {
    let max = -Infinity, secondMax = -Infinity, min = Infinity;

    for(let num of nums){
        if(num>max){
            secondMax = max;
            max = num;
        } else if(num>secondMax){
            secondMax = num;
        }

        if(num<min){
            min = num;
        }
    }

    return max+secondMax-min;

};