/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    let count =0;
    for(let i=0; i<s.length; i++){
        if(/^[aeiou]$/i.test(s[i])){
             count++;
        }
    }
    
    if(count==0) return false;
    else return true;
};