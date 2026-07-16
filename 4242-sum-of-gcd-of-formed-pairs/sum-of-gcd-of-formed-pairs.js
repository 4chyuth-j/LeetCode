/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {
    let max = nums[0];
    let prefixGcd = [];
    for(let i=0; i<nums.length; i++){
        max = Math.max(max,nums[i]);
        prefixGcd.push(getGCD(max,nums[i]));
    }
    prefixGcd.sort((a,b)=>a-b);
    let i = 0, j = prefixGcd.length-1;
    let sum = 0;
    while(i<j){
        sum+=getGCD(prefixGcd[i],prefixGcd[j]);
        i++;
        j--;
    }

    return sum;
};

function getGCD(num1,num2){
    
    while(num2!=0){
        let r = num1%num2;
        num1 = num2;
        num2 = r;
    }

    return num1;
}