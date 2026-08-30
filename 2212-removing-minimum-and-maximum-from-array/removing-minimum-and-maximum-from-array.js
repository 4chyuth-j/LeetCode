/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    let n = nums.length;
    let minInd = 0,maxInd = 0;
    for(let i=0; i<n; i++){
        if(nums[i]<nums[minInd]){
            minInd = i;
        }

        if(nums[i]>nums[maxInd]){
            maxInd = i;
        }
    }

    if(minInd>maxInd){
        [minInd,maxInd] = [maxInd,minInd];
    }

    let front = maxInd + 1;

    let rear = n - minInd;

    let both = (minInd+1) + (n-maxInd);

    return Math.min(front,rear,both);
};