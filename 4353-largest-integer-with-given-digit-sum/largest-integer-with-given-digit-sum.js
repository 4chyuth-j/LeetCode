/**
 * @param {number} n
 * @param {number} s
 * @return {number}
 */
var largestInteger = function(n, s) {
    if(n*9<s) return -1;

    if(s==0) return 0;

    let number = 0;
    let flag = s;
    while(n>0){
        let dig = 0;
        if(flag>9){
            dig = 9;
            flag = flag-9
        } else if(flag<=9){
            dig = flag;
            flag = 0;
        }
        number = number*10+dig;
        n--;
    }

    return number;
};