/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
   
    let string = (s+s).slice(1,-1);
    console.log(string);
    return string.includes(s);
    
 
};