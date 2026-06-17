/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let i = 0,j=nums.length-1;

    while(i<=j){
        if(nums[i]!=target){
            flag = true;
            i++;
        }

        if(nums[j]!=target){
            flag = true;
            j--;
        }

        if(nums[i]==target && nums[j]==target){
            break;
        }
    }

    if(nums[i]!==target || nums[j]!==target) return [];

    let res =[];

    for(let ind = i; ind<=j; ind++){
        res.push(ind);
    }

    return res;

};