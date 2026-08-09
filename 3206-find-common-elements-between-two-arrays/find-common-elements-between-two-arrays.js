/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let n = nums1.length , m = nums2.length;

    let ans1 = 0,ans2 = 0;

    for(let i=0; i<n; i++){
        if(set2.has(nums1[i])) ans1++;
    }

    for(let j=0; j<m; j++){
        if(set1.has(nums2[j])) ans2++;
    }

    return [ans1,ans2];
};