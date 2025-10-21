/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let l = 0, r=0;
    let set = new Set();
    let len = s.length;

    while(r<len){
        while(set.has(s[r])){
            set.delete(s[l]);
            l++;
        }

        set.add(s[r]);
        maxLen = Math.max(maxLen,(r-l+1));
        r++;
    }

    return maxLen;

};