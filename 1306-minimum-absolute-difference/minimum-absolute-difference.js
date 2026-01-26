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
          res = [i];
        } else if(diff==min) {
            res.push(i);
        }
        
    }

    return res.map(ind=>[arr[ind],arr[ind+1]]);

};