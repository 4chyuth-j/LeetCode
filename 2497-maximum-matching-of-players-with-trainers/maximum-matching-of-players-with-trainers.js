/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    let p = players.length;
    let t = trainers.length;
    players.sort((a,b)=>a-b);
    trainers.sort((a,b)=>a-b);
    let count = 0;
    let p1 = 0;
    let p2 = 0;
    while(p1<=p && p2<=t){
        if(players[p1]<=trainers[p2]){
            count++;
            p1++;
            p2++;
        } else {
            p2++;
        }
    }

    return count;
    
};