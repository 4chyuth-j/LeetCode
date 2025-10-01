/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map1 = new Map();
    let res =[];

    for(let i=0; i<nums1.length; i++){
        map1.set(nums1[i], (map1.get(nums1[i])||0)+1 );
    }

    for(let num of nums2){
        if(map1.get(num)>0){
            res.push(num);
            map1.set(num,(map1.get(num)-1));
        }
    }

   

    return res;

};