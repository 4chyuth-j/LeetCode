/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {

    if(k==0){
        return new Array(code.length).fill(0);
    }

    let res = [];
    let n = code.length;

    for(let i=0; i<code.length; i++){
        let sum = 0
        let count = Math.abs(k);
        let ind = i;
        while(count){
            if(k>0){
                ind = (ind+1)%n;
                sum+=code[ind];
                count--;
                
            } else {
                ind = (ind-1+n)%n;
                sum+=code[ind];
                count--;
            }
        }

        res.push(sum);
    }

    return res;

};