/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
   let set = new Set();
   for(let i=0; i<nums.length-1; i++){
       if(nums[i]==nums[i+1]){
            nums[i]*=2;
            nums[i+1]=0;
       }
   } 

//    moveZerosToEnd(nums,nums.length);

    let j=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]!=0 && nums[j]==0){
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }
        if(nums[j]!=0) j++;
    }

   return nums;
};

// function moveZerosToEnd(arr, n)
// {
//     let j=0, temp, i;
//     for(i=0;i<n;i++)
//     {
//         if(arr[i]!=0 && arr[j]==0)
//             {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         if(arr[j]!=0)
//             j+=1;
//     }
// }