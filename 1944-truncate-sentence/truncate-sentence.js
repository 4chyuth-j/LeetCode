/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
   
    // let str = s.split(" ").slice(0,k).join(" ");
    // return str;
    let spaceCount = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            spaceCount++;
            if(spaceCount === k) {
                return s.substring(0, i);
            }
        }
    }
    return s; // If k >= number of words

};