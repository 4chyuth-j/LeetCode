/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let averages = new Array();
    nums.sort((a,b)=>a-b);
    while(nums.length>0){
        let a = nums.pop();
        let b = nums.shift();
        let avg = (a+b)/2;
        averages.push(avg);
    }
    averages.sort((a,b)=>a-b);
    return averages[0];
};