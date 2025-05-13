/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let arr =[0];
    for(let i=0; i<gain.length ; i++){
        arr[i+1]=arr[i]+gain[i]
    }
    arr.sort((a,b)=>a-b);
    return arr.pop();
};