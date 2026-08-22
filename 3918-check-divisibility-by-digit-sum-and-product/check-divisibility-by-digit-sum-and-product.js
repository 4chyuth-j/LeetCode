/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let digSum = 0;
    let digProd = 1;
    let dig = n;
    
    while(dig>0){
        let num = dig%10;
        digSum+=num;
        digProd*=num;
        dig = Math.floor(dig/10);
    }

    return n%(digSum+digProd)===0;

};