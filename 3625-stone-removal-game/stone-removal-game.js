/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    if(n<10) return false;

    n = n-10;
    let i = 9;
    while(n>0){
        if(n-i<0) break;
        n -= i;
        i--;
    }

    return i%2===1;
};