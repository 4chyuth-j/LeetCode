/**
 * @param {string} s
 * @return {number}
 */
var firstMatchingIndex = function(s) {
    const n = s.length; 
    let i = 0;
    while(i<=Math.floor(n/2)){
        if(s[i] == s[n - i - 1]) return i;
        i++;
    }

    return -1;
};