/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let res =0;
    let l=-1,r=0;
    while(r<colors.length){
        if(colors[r]===colors[l]){
            if(neededTime[r]>neededTime[l]){
                res+=neededTime[l];
                l=r;
            }else {
                res+=neededTime[r];
            }
        } else {
            l=r;
        }
        r++;
    }

    return res;
};