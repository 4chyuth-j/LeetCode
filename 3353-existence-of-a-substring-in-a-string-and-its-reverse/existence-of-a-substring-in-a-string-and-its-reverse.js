/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
    let revString = s.split("").reverse().join("");
    for(let i=0; i<s.length-1; i++){
        let sub = s[i]+s[i+1];
        if(revString.includes(sub)) return true;
    }

    return false;
};