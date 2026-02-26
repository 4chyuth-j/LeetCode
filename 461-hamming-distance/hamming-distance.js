/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xS = x.toString(2);
    let yS = y.toString(2);

    if(xS.length!=yS.length){
        let len = Math.abs(yS.length-xS.length);
        let arr = new Array(len).fill(0);

        if(xS.length<yS.length){
            xS = arr.join("")+xS;
        } else {
            yS = arr.join("")+yS;
        }
    }

    let count = 0;

    for(let i=0; i<xS.length; i++){
        if(xS[i]!==yS[i]) count++
    }

    return count;

};