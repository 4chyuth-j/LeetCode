/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = [];
    let pref = [];
    let suf = [];

    let start1 =1;
    for(let i=0; i<nums.length; i++){
        pref.push(start1);
        start1 = start1*nums[i];
    }

    let start2 = 1;
    for(let i=nums.length-1; i>=0; i--){
        suf.unshift(start2);
        start2 = start2*nums[i];
    }
    console.log(pref)
    console.log(suf)

    for(let i=0; i<nums.length; i++){
        res.push(pref[i]*suf[i]);
    }

    return res;
};