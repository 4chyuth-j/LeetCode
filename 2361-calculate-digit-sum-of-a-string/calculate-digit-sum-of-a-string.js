/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {

    let str = s;

    while (str.length > k) {
        let newStr = "";
        for (let i = 0; i < str.length; i += k) {
            let sum = getSum(str.slice(i, i + k));
            newStr += sum;
        }

        str = newStr;
    }

    return str;
};

function getSum(str) {
    let sum = 0;
    
    for(let char of str){
        sum+=Number(char);
    }

    return sum.toString();
}