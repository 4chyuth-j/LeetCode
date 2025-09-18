/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {

    let res = [0, 0];
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'L') res[0] -= 1;
        else if (moves[i] === 'R') res[0] += 1;
        else if (moves[i] === 'U') res[1] += 1;
        else if (moves[i] === 'D') res[1] -= 1;
    }

    return res[0] == 0 && res[1] == 0

};