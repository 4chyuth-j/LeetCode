/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    let seen = new Set();
    let count = 0;

    for(let i=0; i<digits.length; i++){
        for(let j=0; j<digits.length; j++){
            for(let k=0; k<digits.length; k++){
                if(i==j || j==k || i==k) continue;
                let num = digits[i]*100+digits[j]*10+digits[k];
                if(seen.has(num) || num%2!==0 || num<100) continue;
                count++;
                seen.add(num);
            }
        }   
    }

    return count;
};