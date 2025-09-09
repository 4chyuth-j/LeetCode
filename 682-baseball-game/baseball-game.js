/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(op) {
    let res = [];
    const regex = /^[CD+]$/;
   for(let i=0; i<op.length; i++){
    if(regex.test(op[i])){
        if(op[i]=='C'){
            res.pop();
        } else if(op[i]=='D'){
            res.push(res[res.length-1]*2);
        } else {
            let sum = res[res.length-1]+res[res.length-2];
            res.push(sum);
        }

    } else {
        res.push(parseInt(op[i]));
    }
   }
   return res.reduce((acc,curr)=>acc+curr,0);
};