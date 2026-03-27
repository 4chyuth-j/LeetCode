/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let set3 = new Set(nums3)
    let set = new Set([...nums1,...nums2,...nums3]);

    let res = [];

    for(let val of set ){
       if( (set1.has(val)&&set2.has(val)) || (set1.has(val)&& set3.has(val)) || (set2.has(val)&& set3.has(val)) ){
         res.push(val);
       }
    }

    return res;
};