/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b);
    let map = new Map();
    let min = Infinity;
    for(let i=0; i<arr.length-1; i++){
        let diff = arr[i+1]-arr[i];
        if(diff<=min){
          let val = map.get(diff) || [];
          val.push([arr[i],arr[i+1]])
          map.set(diff,val);
        }
        min = Math.min(min,diff);
    }

    for(let [key,val] of map){
        if(key==min){
            return val;
        }
    }


};