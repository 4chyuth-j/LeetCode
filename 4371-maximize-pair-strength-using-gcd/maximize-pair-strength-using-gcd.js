/**
 * @param {number[]} nums
 * @return {number}
 */
var maxPairStrength = function(nums) {
    
    let ans = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            const gcd = getGCD(nums[i],nums[j]);
            const strength = (nums[i]*nums[j])/(gcd*gcd);
            ans = Math.max(ans,strength);
        }
    }

    return ans;

};

function getGCD(a,b){
    while(b!==0){
        [a,b] = [b,a%b]
    }

    return a;
}