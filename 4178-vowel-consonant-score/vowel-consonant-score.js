/**
 * @param {string} s
 * @return {number}
 */
var vowelConsonantScore = function(s) {
    let c = 0;
    let v = 0;

    for(let char of s){
        if(
            /^[a-z]$/.test(char) &&
            !/^[aeiou]$/.test(char)
        ){
            c++;
        } else if(/^[aeiou]$/.test(char)){
            v++;
        }
    }

    return c==0? 0 : Math.floor(v/c);
};