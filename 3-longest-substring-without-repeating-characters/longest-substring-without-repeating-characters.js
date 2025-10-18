/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let res = 0;
    for (let j = 0; j < s.length; j++) {
        let  charSet = new Set();
        for (let i = j; i < s.length; i++) {
           if(charSet.has(s[i])){
                break;
           } else {
             charSet.add(s[i]);
             res = Math.max(res,i-j+1);
           }
        }
        
    }
    return res;
};