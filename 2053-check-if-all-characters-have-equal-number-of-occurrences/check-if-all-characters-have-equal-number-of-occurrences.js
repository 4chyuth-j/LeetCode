/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const frq = {};
    for(let c of s){
        if(frq[c]){
            frq[c]++;
        } else {
            frq[c] = 1
        }
    }

    let prev = frq[s[0]];
    for(let val of Object.values(frq)){
        if(val!=prev) return false;
    }

    return true;
};