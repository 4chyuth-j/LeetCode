/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let max = 1;
    for(let i=0; i<colors.length; i++){
        for(let j=i+1; j<colors.length; j++){
            if(colors[i]!=colors[j]){
                let res = Math.abs(i-j);
                max = Math.max(res,max);
            }
        }
    }

    return max;
};
