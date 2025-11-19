/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let res = [];
    for(let i=left; i<=right; i++){
        let num = i;
        let flag = true;
        while(num>0){
            let rem = num%10;
            if(rem==0 || i%rem!=0){
                flag = false;
                break;
            };
            num = Math.floor(num/10); 
        }

        if(flag){
            res.push(i);
        }
    }

    return res;
};