/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
    let revString = s.split("").reverse().join("");
    let hash = new Set();
    for(let i=0; i<s.length-1; i++){
        let sub = s[i]+s[i+1];
        hash.add(sub);
    }

    for(let i=0; i<s.length-1; i++){
        let sub = revString[i] + revString[i+1];
        if(hash.has(sub)) return true;
    }

    return false;
};