/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b);
    let min = Infinity;
    let res = [];
    for(let i=0; i<arr.length-1; i++){
        let diff = arr[i+1]-arr[i];
        if(diff<min){
          min = diff;
          res = [[arr[i],arr[i+1]]];
        } else if(diff==min) {
            res.push([arr[i],arr[i+1]]);
        }
        
    }

    return res;

};