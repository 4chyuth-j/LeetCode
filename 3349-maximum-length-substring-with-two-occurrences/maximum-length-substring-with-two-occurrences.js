/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let maxLen = 1;
    let i=0,j=0;
    let map = new Map();
    while(j<s.length){
        map.set(s[j],(map.get(s[j])||0)+1);
        while(map.get(s[j])>2){
            map.set(s[i],map.get(s[i])-1);
            if(map.get(s[i])==0) map.delete(s[i]);
            i++;
        }

        maxLen = Math.max(maxLen,j-i+1 );
        j++;
    }

    return maxLen;
};