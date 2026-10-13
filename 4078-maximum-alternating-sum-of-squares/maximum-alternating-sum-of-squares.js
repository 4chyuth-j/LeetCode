/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    nums = nums.map(num => num*num);
    nums.sort((a,b)=>b-a);
    let i = 0;
    let n = nums.length;
    let sum = 0;
    while(i<Math.floor(n/2)){
        sum+=nums[i]-nums[n-1-i];
        i++;
    }
    if(n%2==1){
        sum+=nums[i];
    }

    return sum;
};