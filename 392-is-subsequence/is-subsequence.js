/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

    let sp=0;
    let tp=0;

    while(sp<s.length && tp<t.length){
        if(s[sp]==t[tp]){
            sp++;
        }

        tp++;
    }

    return sp===s.length;

};


// let stack = [];
// for (let i = s.length - 1; i >= 0; i--) {
//     stack.push(s[i]);
// }

// for (let c of t) {
//     if (c === stack[stack.length - 1]) {
//         stack.pop();
//     }
// }

// return stack.length === 0;