/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
   
    for(let i=0; i<s.length; i++){
        if(/^[aeiou]$/i.test(s[i])){
             return true;
        }
    }

    return false;
    
    
};