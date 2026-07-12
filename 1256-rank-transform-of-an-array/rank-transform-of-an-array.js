/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let newArr = [...arr].sort((a,b)=>(a-b));
    let obj = {};
    let rank = 1;

    for(let i=0; i<newArr.length; i++){
        if(obj[newArr[i]]) continue;
        obj[newArr[i]] = rank++;  
    }

    for(let i=0; i<arr.length; i++){
        arr[i] = obj[arr[i]];
    }

    return arr;
};