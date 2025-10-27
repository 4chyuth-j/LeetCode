function maxScore(cardPoints: number[], k: number): number {
    let leftS:number = 0;
    let rightS:number = 0;
    for(let i=0; i<k; i++){
        leftS+=cardPoints[i];
    }

    let l:number = k-1;
    let r:number = cardPoints.length-1;
    let max:number = leftS+rightS;

    while(l>=0){
        leftS -= cardPoints[l];
        rightS += cardPoints[r];
        max = Math.max(max,(leftS+rightS));
        l--;
        r--;
    }

    return max;


};