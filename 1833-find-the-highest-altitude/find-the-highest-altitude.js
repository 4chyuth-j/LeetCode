/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max =0;
    let currAlt = 0;
    for(let i=0; i<gain.length ; i++){
        currAlt +=gain[i];
        max = Math.max(max,currAlt);
    }

    return max;
};