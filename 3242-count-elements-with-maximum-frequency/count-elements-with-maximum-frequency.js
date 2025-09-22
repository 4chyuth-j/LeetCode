/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    if(nums.length==1) return 1;

    let freq = new Map();
    for(let i=0; i<nums.length; i++){
        freq.set(nums[i],(freq.get(nums[i])||0) + 1 );
    }
    
    let freqArr = [...freq.values()];
    freqArr.sort((a,b)=>b-a);
    
    let ref = freqArr[0];
    let res =freqArr[0];
    for(let i=1; i<freqArr.length; i++){
        if(freqArr[i]==ref){
            res+=freqArr[i];
        }
    }

    return res;

};