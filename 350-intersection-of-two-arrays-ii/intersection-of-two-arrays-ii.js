/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map1 = new Map();
    let map2 = new Map();
    let res =[];
    for(let i=0; i<nums1.length; i++){
        map1.set(nums1[i], (map1.get(nums1[i])||0)+1 );
    }

    for(let i=0; i<nums2.length; i++){
        map2.set(nums2[i], (map2.get(nums2[i])||0)+1 );
    }

    for(let [key,val] of map1){
        if(map1.has(key) && map2.has(key)){
            if(map1.get(key)===map2.get(key)){
                for(let i=0; i<map1.get(key); i++){
                    res.push(key);
                }


            } else if(map1.get(key)<map2.get(key)){
                for(let i=0; i<map1.get(key); i++){
                    res.push(key);
                }


            } else {

                for(let i=0; i<map2.get(key); i++){
                    res.push(key);
                }

            }
        }
    }

    return res;

};