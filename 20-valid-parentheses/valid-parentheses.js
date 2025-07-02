/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 == 1) return false;

    let arr = ['(', '[', '{'];
    let opening = new Set(arr);
    arr = [[')', '('], [']', '['], ['}', '{']];
    let closing = new Map(arr);

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (opening.has(s[i])) {

            stack.push(s[i]);

        } else {

            if(stack.length==0) return false;

            if (stack.pop() == closing.get(s[i])) {
                continue;
            } else {
                return false;
            }

        }
    }

    if(stack.length!=0) return false;

    return true;


};