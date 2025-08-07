/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count =0;
    let start =0,end = s.length-1;
    while(start<end){
        if(set.has(s[start])) count++;
        if(set.has(s[end])) count--;
        start++;
        end--;
    }

    return count ===0;
};