/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let map = new Map();

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
        map.set(res, (map.get(res) || 0) + 1 );
        lowLimit++;
    }

    let ballNum = 0;
    for(let [key,val] of map){
        ballNum = Math.max(ballNum,val);
    }

    return ballNum;

    
};