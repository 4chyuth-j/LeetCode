/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    
    const getRev = (num)=>{
        let res = 0;
        while(num>0){
            let dig = num%10;
            num = Math.floor(num/10);
            res = res*10+dig;
        }
        return res;
    }

    return Math.abs(n-getRev(n));

};