/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    let n = s.length;
    let str = ''
    for(let i=0; i<n; i++){
        str+=s[(i+k)%n];
    }

    return str;
};