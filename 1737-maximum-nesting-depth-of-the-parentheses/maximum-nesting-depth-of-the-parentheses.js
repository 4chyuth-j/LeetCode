/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count=0;
    let maxCount = 0;
    for(let c of s){
        if(c=="("){
            count++;
            maxCount = Math.max(count,maxCount);
        }
        if(c==")"){
            count--;
        }
    }

    return maxCount;
};