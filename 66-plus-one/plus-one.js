/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    // let num = BigInt(digits.join(""));  // Convert array to a BigInt
    // num = num + BigInt(1);
    // num=num.toString();
    // num =num.split("")
    // for(let i=0; i<num.length; i++){
    //    num[i] = parseInt(num[i]);
    // }

    // return num;

    let carry = 1;

    let ind = digits.length -1;
    while(carry!=0 && ind>=0){
        let sum = carry;
        sum += digits[ind];
        digits[ind] = sum%10;
        carry = Math.floor(sum/10);
        ind--;
    }

    if(carry){
        digits.unshift(carry);
    }
    return digits;
};