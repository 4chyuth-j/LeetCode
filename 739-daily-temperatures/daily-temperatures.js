/**
 * @param {number[]} temp
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let n = temp.length;
    let res = new Array(n).fill(0);
    let s = [];

    for(let i=0; i<n; i++){
        while(s.length && temp[i]>temp[s[s.length-1]]){
            let ind = s.pop();
            res[ind] = i-ind;
        }
        s.push(i);
    }

    return res;
    
};