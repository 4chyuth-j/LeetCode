/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let temp = [];
    let l = 0,r=0;
    while(l<(m) && r<n){
        if(nums1[l]<=nums2[r]){
            temp.push(nums1[l]);
            l++;
        } else {
            temp.push(nums2[r]);
            r++;
        }
    }

    while(l<(m)){
        temp.push(nums1[l]);
        l++;
    }

    while(r<n){
        temp.push(nums2[r]);
        r++;
    }

    for(let i=0; i<m+n; i++){
        nums1[i] = temp[i];
    }
};