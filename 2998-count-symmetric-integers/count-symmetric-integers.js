/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count = 0;
    while(low<=high){
        if(isSymmetric(low)){
            count++;
        }

        low++;
    }

    return count;
};

function isSymmetric(num){
    let str = String(num);
    if(str.length%2!==0) return false;
    let leftSum = 0, rightSum = 0;

    let i=Math.floor(str.length/2)-1;
    let j = i+1;

    while(i>=0 && j<str.length){
        leftSum+=Number(str[i--]);
        rightSum+=Number(str[j++]);
    }

    return leftSum==rightSum;

}