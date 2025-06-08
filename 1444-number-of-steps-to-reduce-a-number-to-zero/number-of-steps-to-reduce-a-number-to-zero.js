/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    function counter(num,count){
        if(num==0) return count;
        if(num%2==0) {
            return counter(num/2,++count);
        } else {
            return counter(num-1,++count);
        }
    }

    return counter(num,0);
    
};