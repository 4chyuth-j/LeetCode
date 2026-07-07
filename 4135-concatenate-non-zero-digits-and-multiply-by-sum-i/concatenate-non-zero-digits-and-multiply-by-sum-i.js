/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    
    let num = 0;
    let sum = 0;
    let mul = 1;
    while(n>0){
        let dig = n%10;
        if(dig!==0){
            num = dig*mul+num;
            mul*=10;
        }
        sum+=dig;
        n = Math.floor(n/10);
    }

    return num*sum;
};