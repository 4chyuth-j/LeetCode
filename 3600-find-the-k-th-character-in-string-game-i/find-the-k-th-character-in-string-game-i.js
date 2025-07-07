/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
    let w = 'a';
    while (w.length <= k) {
        let result = '';
        for (let i = 0; i < w.length; i++) {
            let code = w.charCodeAt(i);
            if (w[i] === 'z') {
                result += 'a';
            } else {
                result += String.fromCharCode(code + 1);
            }
        }
        w += result;
    }
    console.log(w);
    return w[k-1];
};