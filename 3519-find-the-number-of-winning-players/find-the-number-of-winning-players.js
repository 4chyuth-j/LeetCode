/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function(n, pick) {
    let map = new Map();
    let winner = {};
    let winCount = 0;

    for(let play of pick){
        let key = JSON.stringify(play)
        map.set(key, (map.get(key)||0)+1 );
    }
    

    for(let [key,val] of map){
        let keyArr = JSON.parse(key);
        if(keyArr[0]<val && !winner[keyArr[0]]){
            winCount++;
            winner[keyArr[0]] = true;
        }
    }

    return winCount;
};

