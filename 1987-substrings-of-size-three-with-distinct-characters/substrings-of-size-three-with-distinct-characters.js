/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    if(s.length<3) return 0;
    let res = 0;
    for(let i=0; i<s.length-2; i++){
        let window = [s[i],s[i+1],s[i+2]];
        let set = new Set(window);
        if(set.size===3) res++;
    }

    return res;
};