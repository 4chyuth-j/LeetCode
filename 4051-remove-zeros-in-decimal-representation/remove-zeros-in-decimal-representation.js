/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    if(n<10) return n;

    n = String(n);
    let num = '';
    for(let i=0; i<n.length; i++){
        if(n[i]!=='0'){
            num+=n[i];
        }
    }

    return parseInt(num);
};