/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let arr = String(n).split("");
    let sign = true;
    let sum = 0;

    arr.forEach(item=>{
        if(sign){
            sum+=Number(item);
        } else {
            sum-=Number(item);
        }
        sign = !sign;
    });

    return sum;

};