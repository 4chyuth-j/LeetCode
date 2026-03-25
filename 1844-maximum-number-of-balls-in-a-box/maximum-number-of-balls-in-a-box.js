/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {

    let freq = new Array(46).fill(0);

    const getSum = (num)=>{
        let sum = 0;
        while(num>0){
            let last = num%10;
            sum+=last;
            num = Math.floor(num/10);
        }

        return sum;
    }

    while(lowLimit<=highLimit){
        let res = getSum(lowLimit);
        freq[res]++;
        lowLimit++;
    }

    let ballNum = 0;
    for(let val of freq){
        ballNum = Math.max(ballNum,val);
    }

    return ballNum;

    
};