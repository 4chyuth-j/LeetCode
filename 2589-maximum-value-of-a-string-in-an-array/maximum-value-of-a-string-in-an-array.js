/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let max = -Infinity;
    for(let str of strs){
        let num = Number(str);
        if(isNaN(num)){
            max = Math.max(str.length,max);
        } else {
            max = Math.max(num,max);
        }
    }

    return max;
};