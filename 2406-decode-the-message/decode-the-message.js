/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    let alph = new Map();
    let i = 1;
    for (let c of key) {
        if (c === " ") continue;

        if (!alph.has(c)) {
            alph.set(c, 96 + i);
            i++;
        }

    }

    let res = "";
    for (let c of message) {
        if (c ===" "){
            res+=" ";
            continue;
        }

        let char = alph.get(c);
        res+=String.fromCharCode(char);

    }

    return res;
};