/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let rev = false;
    let pos = 1;

    for(let i=1; i<=time; i++){
        if(!rev){
            pos+=1
            if(pos===n) rev = true;
        } else {
            pos-=1;
            if(pos===1) rev = false;
        }
    }

    return pos;
};