/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, requests) {
    let seconds = requests[0];
    for(let i=1; i<requests.length; i++){
        seconds += Math.abs(requests[i]-requests[i-1]);
    }

    return seconds;
};