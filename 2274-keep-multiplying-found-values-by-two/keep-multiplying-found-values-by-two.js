/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let isOrginal = true;
    let set = new Set(nums);

    while(isOrginal){
        if(set.has(original)){
            original*=2;
        } else {
            isOrginal = false;
        }
    }

    return original;


};



