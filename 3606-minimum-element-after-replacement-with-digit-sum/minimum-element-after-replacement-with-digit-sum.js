/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let dum = [];
    for(let i=0; i<nums.length; i++){
        let val = nums[i];
        let sum =0;
        while(val>0){
            sum += val%10;
            val = Math.floor(val/10);
        }
        dum[i] = sum;
    }

    dum.sort((a,b)=>a-b);
    return dum[0];
};