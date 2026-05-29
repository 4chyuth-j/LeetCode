/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let min = Infinity;
    for(let num of nums){
        let digSum = getMin(num);
        min = Math.min(min,digSum);
    }

    function getMin(num){
        let sum =0;
        while(num>0){
            let dig = num%10;
            num = Math.floor(num/10);
            sum +=dig;
        }

        return sum;
    }

    return min;
};