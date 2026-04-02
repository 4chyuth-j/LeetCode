/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s==goal) return true;

    let word = s.split("");
    let n = s.length;

    for(let i=0; i<n; i++){
        let char = word.shift();
        word.push(char);
        if(goal === word.join("")) return true;
    }

    return false
};