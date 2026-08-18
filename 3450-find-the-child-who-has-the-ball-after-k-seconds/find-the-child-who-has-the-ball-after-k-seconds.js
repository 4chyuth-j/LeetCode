/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
    let currBall = 0;
    let dir = 1;

    for(let i=0; i<k; i++){
        if(dir==1){
            if(currBall===n-1) dir = -1;
        } else {
            if(currBall===0) dir = 1;
        }
        
        currBall+=dir;
    }

    return currBall;
};