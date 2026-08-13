/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function(nums) {
    const seen =[],ans = [];
    let i=0;
    while(i<nums.length){
        let k = 0;
        if(nums[i]>0){
            seen.unshift(nums[i]);
            i++;
        }

        while(nums[i]<0 && i<nums.length){
            k++;
            if(seen[k-1]){
                ans.push(seen[k-1])
            } else {
                ans.push(-1);
            }
            i++;
        }
    }

    return ans;
};