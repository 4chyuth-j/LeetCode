/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    //  if (s.length !== t.length) return false;

    // const count = {};

    // for (let char of s) {
    //     count[char] = (count[char] || 0) + 1;
    // }

    // for (let char of t) {
    //     if (!count[char]) return false;
    //     count[char]--;
    // }

    // return true;

    if(s.length!= t.length) return false;

    let counter = new Array(26).fill(0);

    for(let i=0; i<s.length; i++){
        counter[s.charCodeAt(i)-'a'.charCodeAt(0)]++;
        counter[t.charCodeAt(i)-'a'.charCodeAt(0)]--;
    }

    for(let char of counter){
        if(char!=0){
            return false;
        }
    }

    return true;
};
