/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let freq = new Map();
    let ans = -1;
    let maxFreq = 0;
    for(let num of nums){
        if(num%2!==0) continue;

        const count = (freq.get(num)||0)+1;
        freq.set(num,count);
        if(count>maxFreq || (count ==maxFreq && num<ans)){
            ans = num;
            maxFreq = count;
        }
        
    }

    return ans;
    
};