/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    
    
    // let arr = [[')', '('], [']', '['], ['}', '{']];
    // let closing = new Map(arr);
    const closing = {
        ')': '(',
        ']': '[',
        '}': '{'
    }


    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (!closing[s[i]]) {

            stack.push(s[i]);

        } else {

            if(stack.length==0) return false;

            if (stack.pop() == closing[s[i]]) {
                continue;
            } else {
                return false;
            }

        }
    }

    if(stack.length!=0) return false;

    return true;


};