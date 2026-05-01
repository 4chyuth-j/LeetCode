/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let max = -1,smax = -1;
    let min = Infinity ,smin = Infinity ;

    for(let num of nums){
        if(num>max){
            smax = max;
            max = num;
        } else if(num>smax){
            smax = num;
        }

        if(num<min){
            smin = min;
            min = num;
        } else if(num<smin){
            smin = num;
        }
    }

    return (max*smax) - (min*smin);
};