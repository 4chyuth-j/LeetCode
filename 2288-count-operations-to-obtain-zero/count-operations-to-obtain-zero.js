/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    let ops = 0
    while(num1!=0 && num2!=0){
        ops++;
        if(num1==num2){
            return ops;
        } else if(num1>num2){
            num1 = num1-num2;
        } else {
            num2 = num2-num1;
        }
    }
    return ops;
};