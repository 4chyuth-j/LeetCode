/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    let scoreOne = 0,scoreTwo =0;
    
    for(let i=0; i<player1.length; i++){
        if(player1[i-1]==10 || player1[i-2]==10){
            scoreOne+=2*player1[i];
        } else {
            scoreOne+=player1[i];
        }

        if(player2[i-1]==10 || player2[i-2]==10){
            scoreTwo+=2*player2[i];
        } else {
            scoreTwo+=player2[i];
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