/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    // console.log("a".charCodeAt(0)-96)
    let num = "";
    // let sum = 0;
    for(let c of s){
        num+=(c.charCodeAt(0)-96);
    }
    // console.log(num);

    while(k>0){
        // let temp="";
        let tempSum = 0;
       for(let char of num){
             tempSum +=Number(char);
       }
       console.log(tempSum);
       num=""+tempSum;
       k--;
    }

    // console.log(num);
    return Number(num);
};