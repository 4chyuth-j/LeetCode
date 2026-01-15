/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    let scoreOne = 0,scoreTwo =0;
    let count = 0
    for(let i=0; i<player1.length; i++){
        if(count>0){
            scoreOne += player1[i]*2;
            if(player1[i]==10){
                count=2;
            } else {
                count--;
            }
        } else {
            if(player1[i]==10){
                count=2;
            } 
            scoreOne += player1[i]
        }
    }

    count =0;

    for(let i=0; i<player2.length; i++){
        if(count>0){
            scoreTwo += player2[i]*2;
            if(player2[i]==10){
                count=2;
            } else {
                count--;
            }
        } else {
            if(player2[i]==10){
                count=2;
            } 
            scoreTwo += player2[i]
        }
    }

    if(scoreOne>scoreTwo){
        return 1;
    } else if(scoreTwo>scoreOne){
        return 2;
    } else {
        return 0;
    }
};