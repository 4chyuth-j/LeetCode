/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let carry = 1;

    let ind = digits.length -1;
    while(carry!=0 && ind>=0){
        const sum = carry+digits[ind];
        digits[ind] = sum%10;
        carry = Math.floor(sum/10);
        ind--;
    }

    if(carry){
        digits.unshift(carry);
    }
    return digits;
};