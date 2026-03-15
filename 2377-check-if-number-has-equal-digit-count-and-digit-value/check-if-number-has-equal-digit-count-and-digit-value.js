/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let frq = new Array(num.length).fill(0);
    for(let elem of num){
        frq[elem]++;
    }
    return frq.join("")===num;
};