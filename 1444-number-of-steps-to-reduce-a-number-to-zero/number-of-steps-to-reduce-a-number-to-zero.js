/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    function counter(n,steps){
        if(n==0) return steps;

        if(n%2==0) return counter(n/2, ++steps);
        else return counter(n-1, ++steps);
    }

    return counter(num,0);


    
};