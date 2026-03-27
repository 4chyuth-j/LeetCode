/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let ans = new Set();
    let set1 = new Set(nums1);

    let set2 = new Set();
    for(let n of nums2){
        set2.add(n);
        if(set1.has(n)){
            ans.add(n);
        }
    }

    for(let n of nums3){
        if(set1.has(n) || set2.has(n)){
            ans.add(n);
        }
    }

    return [...ans];
    
};