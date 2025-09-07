/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let res = [];
    for(let i=s.length-1; i>=0; i--){
        if( /^[A-Za-z]$/.test(s[i])){
            res.push(s[i]);
        }
    }

    for(let i=0; i<s.length; i++){
        if(!/^[A-Za-z]$/.test(s[i]) ){
            res.splice(i,0,s[i]);
        }
    }

    return res.join("");
};