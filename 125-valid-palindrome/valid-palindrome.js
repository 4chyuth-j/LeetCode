/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = '';
    for(let i=0; i<s.length; i++){
        if(/^[A-Za-z0-9]$/.test(s[i])){
            str+=s[i].toLowerCase();
        }
    }
    if(str=='' || str.length == 1) return true;
    
console.log(str);
    let start=0;
    let end = str.length-1;
    while(start<=end){
        if(str[start]!=str[end]) return false;
        start++;
        end--;
    }

    return true;
    
};