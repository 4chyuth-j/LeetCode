/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let stack = [...nums].sort((a,b)=>a-b);
    let arr = [];
    while(stack.length>0){
        arr.push(stack.pop());
        arr.push(stack.shift());
    }

    let res = 0;
    for(let i=0; i<arr.length-1; i+=2){
        res = Math.max(res,arr[i]+arr[i+1]);
    }

    return res;
};