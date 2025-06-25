/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // nums.sort((a,b)=>b-a);

    for(let i=0; i<nums.length-1; i++){
        let curr = i+1;
        while(curr>0){
            if(nums[curr]>nums[curr-1]){
                [nums[curr],nums[curr-1]] = [nums[curr-1],nums[curr]];
                curr--;
            } else {
                break;
            }
        }
    }
    return (nums[0]-1)*(nums[1]-1);
};