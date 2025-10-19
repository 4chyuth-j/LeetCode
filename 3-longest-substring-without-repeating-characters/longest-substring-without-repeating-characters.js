/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let l = 0, r = 0;
    let alphSet = new Set();
    let len = s.length;

    while (r < len) {
        while (alphSet.has(s[r])) {
            alphSet.delete(s[l]);
            l++;
        }

        alphSet.add(s[r]);
        maxLen = Math.max(maxLen, r - l + 1);
        r++;

    }

    return maxLen;

};