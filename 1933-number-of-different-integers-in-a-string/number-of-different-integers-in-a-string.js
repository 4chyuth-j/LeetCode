/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
    let e = 0;
    let set = new Set();

    while (e < word.length) {
        while (e < word.length && /^[a-z]$/.test(word[e])) {
            e++;
        }

        let s = e;

        while (e < word.length && /^[0-9]$/.test(word[e])) {
            e++;
        }

        if (s < e) {
            let item = word.slice(s, e).replace(/^0+/, "");
            if (item === "") item = '0';
            set.add(item);
        }

    }

    return set.size;
};