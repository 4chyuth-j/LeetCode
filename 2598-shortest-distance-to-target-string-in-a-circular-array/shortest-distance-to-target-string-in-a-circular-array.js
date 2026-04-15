/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    if(words[startIndex]===target) return 0;
    let count = 0;
    const n = words.length;
    let i=startIndex;
    let left  = words[(i - 1 + n) % n];
    let right = words[(i + 1) % n];
    let res = 0;

    while(count!=n){
        count++;
        if(left == target){
            res = count;
            break
        }
        i--;
        left  = words[(i - 1 + n) % n];
    }

    i=startIndex;
    count = 0;

    while(count!=n){
        count++;
        if(right==target){
            res = Math.min(res,count);
            break;
        }
        i++;
        right = words[(i + 1) % n];
    }    
    

    return res==0?-1:res;

};