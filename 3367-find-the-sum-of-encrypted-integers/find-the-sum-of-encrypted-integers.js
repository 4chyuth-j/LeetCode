/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    let sum = 0;
    for(let num of nums){
        sum+=getLarge(num);
    }

    return sum;
};

function getLarge(num){
    let copy = num;
    let lDig = 0;
    while(num>0){
        lDig = Math.max(lDig,num%10);
        num = Math.floor(num/10);
    }

    return encryptedNum(copy,lDig);
}

function encryptedNum(num,lDig){
    let len = String(num).length;
    let str = "";
    while(len>0){
        str+=lDig;
        len--;
    }

    return Number(str);
}