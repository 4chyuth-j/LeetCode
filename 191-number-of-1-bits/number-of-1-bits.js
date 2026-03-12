/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let bin = n.toString(2);
    let count = 0;
    for(let c of bin){
        if(c==='1')count++;
    }

    return count;
};