/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let newArr = [...arr].sort((a,b)=>(a-b));
    let obj = {};
    let rank = 1;
    let mapArr = [];

    for(let i=0; i<newArr.length; i++){
        if(obj[newArr[i]]) continue;
        obj[newArr[i]] = rank;
        rank++
    }

    for(let item of arr){
        mapArr.push(obj[item]);
    }
    console.log(mapArr);
    return mapArr;
};