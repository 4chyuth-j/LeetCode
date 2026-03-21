/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const lower = new Array(26).fill(0);
    const upper = new Array(26).fill(0);

    for(let c of s){
        let code = c.toLowerCase().charCodeAt(0)-97;
        if(/^[A-Z]$/.test(c)){
            upper[code]++;
        } else {
            lower[code]++;
        }
    }

    let largest = ''

    for(let i=0; i<26; i++){
        if(lower[i] && upper[i]){
            largest = String.fromCharCode(i+97).toUpperCase();
        }
    }

    return largest;
};