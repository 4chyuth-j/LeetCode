/**
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var validDigit = function(n, x) {
    let num = String(n);
    for(let i=0; i<num.length; i++){
        if(i==0 && num[i]==x) return false;

        if(num[i]==x) return true;
    }

    return false;
};