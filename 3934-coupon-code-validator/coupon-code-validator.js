/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (code, businessLine, isActive) {
   const exp = /^\w+$/;
    const businessLineMap = {'electronics': [], 'grocery': [], 'pharmacy': [], 'restaurant': []};
    const ans = [];

    for (let i = 0; i < code.length; i++) {
        if (exp.test(code[i]) && 
            businessLineMap[businessLine[i]] && 
            isActive[i]) businessLineMap[businessLine[i]].push(code[i]);
    }

    for (key in businessLineMap) {
        ans.push(...businessLineMap[key].sort());
    }

    return ans;
};

