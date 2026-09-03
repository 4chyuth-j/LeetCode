/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    let smallElem = nums1[0];
    let allEven = true;
    for(let num of nums1){
        if(num%2!==0){
            allEven = false;
        }
        if(num<smallElem){
            smallElem = num;
        }
    }

    return allEven || smallElem%2===1;
};