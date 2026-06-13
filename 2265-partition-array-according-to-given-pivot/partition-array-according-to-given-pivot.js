/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let smaller = [],equal = [],bigger=[];

    for(let num of nums){
        if(num<pivot){
            smaller.push(num);
        } else if (num==pivot){
            equal.push(num);
        } else {
            bigger.push(num);
        }
    }

    return [...smaller,...equal,...bigger];
};