/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let res = 0;
    for(let i=1; i<=num/2; i++){
        if(num%i==0){
            res+=i;
        }
    }
    return num==res;
};