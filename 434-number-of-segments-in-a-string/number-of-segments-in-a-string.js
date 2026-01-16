/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count =0;
    let inSegment = false;
    for(let c of s){
        if(c!=' ' && !inSegment){
            count++;
            inSegment= true;
        } else if(c==' '){
            inSegment = false;
        }
    }
    return count;
};