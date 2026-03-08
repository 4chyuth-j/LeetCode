/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    let alice = false;
    while(n>1){
        alice = !alice;
        n = n-1
    }

    return alice;
};