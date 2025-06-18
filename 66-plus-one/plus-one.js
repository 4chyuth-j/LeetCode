/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let num = BigInt(digits.join(""));  // Convert array to a BigInt
    num = num + BigInt(1);
    num=num.toString();
    num =num.split("")
    for(let i=0; i<num.length; i++){
       num[i] = parseInt(num[i]);
    }

    return num;
    
};