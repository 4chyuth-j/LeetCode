/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let push = 0;
    for(let i=0; i<word.length; i++){
        push += Math.floor(i/8)+1;
    }

    return push;
};