/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let str = s.split("-").join("");
    let len = str.length;
    let res = '';

    for(let i=0; i<(len%k); i++){
        if(/^[a-zA-Z]$/.test(str[i])){
            res+=str[i].toUpperCase();
        } else {
            res+=str[i];
        }
    }

    let i = len%k;

    if(i!=0) res+='-';

    while(i<len){
        let count = k;
        while(count){
            if(/^[a-zA-Z]$/.test(str[i])){
               res+=str[i].toUpperCase();
            } else {
               res+=str[i];
            }
            i++;
            count--;
        }

        res+='-';
        
    }

    return res.slice(0,res.length-1);
};