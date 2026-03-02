/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function(n) {
    let pow = getPower(n);
    let res = [];
    while(n>0){
        let divisor = 10**pow;
        let num = Math.floor(n/divisor)*divisor;
        if(num>0)res.push(num);
        n = n%divisor;
        pow--;
    }

    return res;
};


function getPower(n){
    let pow = 0;
    while(n>9){
        n = Math.floor(n/10);
        pow++;
    }

    return pow;
}