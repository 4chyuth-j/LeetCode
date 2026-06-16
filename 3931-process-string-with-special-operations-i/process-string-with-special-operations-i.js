/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
    let res = '';
    for (let c of s) {
        if (c == "*") {
            res = removeLast(res);
        } else if (c == '#') {
            res = duplicateCurr(res);
        } else if (c == '%') {
            res = reverseCurr(res);
        } else {
            res += c;
        }
    }

    return res;

};


function removeLast(str) {
    return str.slice(0, str.length - 1);
}

function duplicateCurr(str) {
    return str + str
}

function reverseCurr(str) {
    let newStr = '';
    let i = str.length - 1;
    while (i >= 0) {
        newStr += str[i];
        i--;
    }

    return newStr;
}