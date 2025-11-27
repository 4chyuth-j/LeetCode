/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let maxLen = Math.max(a.length, b.length);
    if(a.length<b.length){
        let dum = new Array(maxLen-a.length).fill("0");
        a = dum.join('')+a;
    } else if (a.length>b.length){
        let dum = new Array(maxLen-b.length).fill("0");
        b = dum.join('')+b;
    }
    let carry = 0;
    let res = "";

    for(let i=maxLen-1; i>=0; i--){
        let digitA = Number(a[i]) || 0;
        let digitB = Number(b[i]) || 0;
        let sum = digitA + digitB + carry;
        let char = sum%2;
        res = char+res;
        carry = Math.floor(sum/2);
    }

    if(carry){
        res = carry + res;
    }

    return res;
};