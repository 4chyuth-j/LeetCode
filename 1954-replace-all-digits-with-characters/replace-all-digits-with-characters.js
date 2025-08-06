/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let res = '';
    for(let i=0; i<s.length; i++){
        if(i%2==1){
            res+=shift(s[i-1],Number(s[i]));
        } else {
            res+=s[i];
        }
    }
    return res;
};

function shift(c,x){
    let code = c.charCodeAt(0);
    let offset = code-97;
    let newOffset = (offset+x)%26;
    return String.fromCharCode(97+newOffset);
}