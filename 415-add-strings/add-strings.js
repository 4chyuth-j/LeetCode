/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let res = '';
    let carry = 0;
    let i = num1.length-1;
    let j = num2.length-1;

    while(i>=0 || j>=0 || carry ){
        let dig1 =num1[i]? num1[i].charCodeAt(0)-48 : 0;
        let dig2 =num2[j]? num2[j].charCodeAt(0)-48 : 0;
        let sum = dig1+dig2+carry;
        carry = 0;
        if(sum>9){
            carry = Math.floor(sum/10);
            sum = sum%10;
        }
        res = sum +res;
        i--;
        j--;

    }



    return res;
};