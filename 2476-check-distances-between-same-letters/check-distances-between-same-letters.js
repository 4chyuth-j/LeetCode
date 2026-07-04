/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    for(let i=0; i<s.length; i++){
        let ind = s[i].charCodeAt(0)-97;
        let targInd = distance[ind]+1;
        if(s[i]==s[i+targInd] || s[i] == s[i-targInd]) continue;
        return false
    }

    return true;
};