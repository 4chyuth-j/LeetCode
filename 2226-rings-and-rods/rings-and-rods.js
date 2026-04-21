/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let rodes = Array.from({length:10}, ()=>new Set());

    for(let i=0; i<rings.length-1; i=i+2){
        rodes[rings[i+1]].add(rings[i]);
    }

    let res = 0;

    for(let rode of rodes){
        if(rode.size===3) {
            res++;
        }
    }

    return res;
};