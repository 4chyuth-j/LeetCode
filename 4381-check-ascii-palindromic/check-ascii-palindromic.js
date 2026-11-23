/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromic = function(s) {
    let str = "";
    for(let c of s){
        let code = c.charCodeAt(0).toString(2).padStart(8, '0');
        str+=code;
    }

    return checkPal(str);
};

function checkPal(str){
    let i = 0, j = str.length-1;
    while(i<j){
        if(str[i]!==str[j]) return false;

        i++;
        j--;
    }

    return true;
}