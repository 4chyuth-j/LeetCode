/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    let res = Infinity;
    const n = words.length;
    for(let i=0; i<n; i++){
        if(words[i]===target){
            let diff = Math.abs(i-startIndex);
            let dis = Math.min(diff,n-diff);
            res = Math.min(res,dis);
        }
    }

    return res===Infinity?-1:res;

};