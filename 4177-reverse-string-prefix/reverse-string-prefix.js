/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    let str = "";
    for(let i=k-1; i>=0; i--){
        str+=s[i];
    }

    str+=s.slice(k);
    return str;
};