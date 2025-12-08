/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let tCount=0;
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            if(i==j){
                continue;
            }
            for(let k=1; k<=n; k++){
                if(j==k){
                    continue;
                }
                if((i*i+j*j) ==k*k){
                    tCount++;
                }
            }
        }
    }
    return tCount;
};