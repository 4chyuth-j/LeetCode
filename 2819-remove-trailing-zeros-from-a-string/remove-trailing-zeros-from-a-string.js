/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let zeroInd = num.length;
    for(let i=num.length-1; i>=0; i--){
        if(num[i]==0){
            zeroInd = i;
        } else {
            break;
        }
    }

    return num.slice(0,zeroInd);
};