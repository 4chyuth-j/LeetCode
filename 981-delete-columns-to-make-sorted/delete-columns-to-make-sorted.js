/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0;
    let cols = strs[0].length;

    while(cols>0){
        let ref = strs[0][cols-1].charCodeAt(0)-96;
        for(let item of strs){
            if(ref<=item[cols-1].charCodeAt(0)-96){
                ref = item[cols-1].charCodeAt(0)-96;
            } else {
                count++;
                break;
            }
        }
        cols--;
    }

    return count;
};