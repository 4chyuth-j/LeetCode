/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let freqMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
    }
    let result = [];
    for(let [key,value] of freqMap){
        if(key === value){
            result.push(key);
        }
    }
    if(result.length==0) return -1;

    result.sort((a,b)=>b-a);
    return result[0];
};