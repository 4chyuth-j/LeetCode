/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(0);

    for(let i=0; i<n-1; i++){
        let rem = nums[i]%2;
        for(let j=i+1; j<n; j++){
            if(rem!=nums[j]%2){
                res[i]+=1;
            }
        }
    }

    return res;
};