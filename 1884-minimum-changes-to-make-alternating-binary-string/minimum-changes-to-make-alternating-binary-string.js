/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let str1 = '';
    let start = 0;
    for(let i=0; i<s.length; i++){
        str1+=start;
        start = start==0?1:0;
    }

    start = 1;
    let str2 = '';
    for(let i=0; i<s.length; i++){
        str2+=start;
        start = start==0?1:0;
    }



    let diff1=0,diff2 =0;

    for(let i=0; i<s.length; i++){
        if(str1[i]!=s[i]) diff1++;
        if(str2[i]!=s[i]) diff2++;
    }

    return Math.min(diff1,diff2);
};