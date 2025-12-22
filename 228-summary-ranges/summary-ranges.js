/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let map = new Map();
    let curr = null;
    let refKey = null;
    
    for(let num of nums){
        if(num>curr && (num-1)==curr){
            map.set(refkey,num);
        } else {
            map.set(num,num);
            refkey = num;
        }
            curr = num;
    }

    let res = [];

    for(let [key,val] of map){
        if(key==val){
            res.push(""+key);
        } else {
            res.push(key+"->"+val);
        }
    }
    return res;
};