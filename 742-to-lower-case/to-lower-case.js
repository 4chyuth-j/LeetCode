/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let res = '';
    let char = /[A-Z]/;
    for(let i=0; i<s.length; i++){
        if(char.test(char)){
          res+=s[i].toLowerCase();
        } else {
            res +=s[i];
        }
    }
    return res;
};