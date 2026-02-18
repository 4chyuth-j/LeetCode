/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let num = n.toString(2);
    for(let i=0; i<num.length-1; i++){
        if(num[i]==num[i+1]) return false
    }

    return true;
};