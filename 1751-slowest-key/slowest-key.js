/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let key = new Array(26).fill(0);

    key[keysPressed[0].charCodeAt(0)-97] = releaseTimes[0];


    for(let i=1; i<releaseTimes.length; i++){

        const index = keysPressed[i].charCodeAt(0)-97
        
        key[index] = Math.max(key[index],releaseTimes[i]-releaseTimes[i-1]);

    }

    let res = {
                ind:-1,
                dur:0
              }


    for(let i=0; i<key.length; i++){
        if(key[i]>=res.dur){
            res.ind = i;
            res.dur = key[i];
        }
    }

    return String.fromCharCode(res.ind + 97)


};