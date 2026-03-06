/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let seg = 0 ;
    let len = 0;
    for(let i=0; i<s.length-1; i++ ){
        if(s[i]==0 && s[i+1]=='1') return false;
    }

    return true;
};