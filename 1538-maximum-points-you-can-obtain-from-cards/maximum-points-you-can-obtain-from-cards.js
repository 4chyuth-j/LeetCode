/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let lsum=0, rsum=0, maxsum=0;
    for(let i=0; i<k; i++){
        lsum += cardPoints[i];
    }

    maxSum=lsum;

    rIndex = cardPoints.length-1;

    for(let i=k-1; i>=0; i--){
        lsum = lsum-cardPoints[i];
        rsum = rsum+cardPoints[rIndex];
        // console.log(`lsum=${lsum} rSum=${rsum} addedsum=${lsum+rsum}`);
        rIndex--;

        maxSum = Math.max( (lsum+rsum),maxSum );
    }

    return maxSum;
};