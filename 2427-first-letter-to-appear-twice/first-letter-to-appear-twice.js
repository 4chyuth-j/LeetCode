/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let freq = new Array(26).fill(-1);
    for(let c of s){
        let ind = c.charCodeAt(0)-'a'.charCodeAt(0);
        if(freq[ind]===0) return c;
        else {
            freq[ind]++;
        }
    }
};