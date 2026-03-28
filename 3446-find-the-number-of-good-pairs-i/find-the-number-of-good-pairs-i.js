/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    nums2 = nums2.map(item=>item*k);
    let res = 0;
    for(let item of nums2){
        for(let i=0; i<nums1.length; i++){
            if(nums1[i]%item===0) res++;
        }
    }

    return res;
};