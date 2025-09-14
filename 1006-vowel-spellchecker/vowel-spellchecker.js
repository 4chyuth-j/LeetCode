/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {
    let exactMatch = new Set(wordlist);
    let lowerMap = new Map();
    let vowelMatch = new Map();

    const isVowel = (ch) => "aeiou".includes(ch);
    const maskVowel = (s) => {
        s = s.toLowerCase();
        let out = '';
        for (let c of s) out += isVowel(c) ? "a" : c;
        return out;
    }

    for (let w of wordlist) {
        let wl = w.toLowerCase();
        if (!lowerMap.has(wl)) lowerMap.set(wl, w);
        const m = maskVowel(wl);
        if (!vowelMatch.has(m)) vowelMatch.set(m, w);
    }

    let ans = [];

    for (let q of queries) {
        if (exactMatch.has(q)) {
            ans.push(q);
            continue;
        }
        let ql = q.toLowerCase();
        if (lowerMap.has(ql)) {
            ans.push(lowerMap.get(ql));
            continue;
        }
        let ml = maskVowel(ql);
        ans.push(vowelMatch.get(ml) || "");
    }

    return ans;
};