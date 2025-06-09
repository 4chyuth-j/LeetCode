/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    // function counter(n,steps){
    //     if(n==0) return steps;

    //     if(n%2==0) return counter(n/2, ++steps);
    //     else return counter(n-1, ++steps);
    // }

    // return counter(num,0);


    let steps = 0;
    while (num != 0) {
        steps++;
        if (num % 2 == 0) {
            num = num / 2;
        }
        else {
            num = num - 1;
        }
    }

    return steps

};